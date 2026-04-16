import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, Check, ArrowRight, Loader2 } from "lucide-react";
import { INQUIRY_QUESTIONS, QuestionStep } from "@/constants/InquiryQuestions";
import { cn } from "@/lib/utils";

export default function ProgressiveForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [showReview, setShowReview] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = INQUIRY_QUESTIONS.length;
  const progress = showReview ? 95 : ((currentStep + 1) / totalSteps) * 100;

  const isStepComplete = useCallback(() => {
    const step = INQUIRY_QUESTIONS[currentStep];
    if (!step || step.type === "final") return true;

    // 1. Contact Info with sub-fields
    if (step.type === "contact") {
      const hasAllFields = step.fields?.every(f => {
        const val = formData[f.name];
        return val && val.toString().trim().length > 0;
      });
      return !!hasAllFields;
    }

    // 2. Date type — single ISO date string
    if (step.type === "date") {
      const dateVal = formData[`step_${step.id}`];
      return !!dateVal && dateVal.length === 10; // YYYY-MM-DD
    }

    // 3. Choice, Multichoice, Text, etc.
    const value = formData[`step_${step.id}`];
    
    // If "Other" is selected, require the custom input to be filled
    if (value === "Other" || (Array.isArray(value) && value.includes("Other"))) {
      const otherVal = formData[`step_${step.id}_other`];
      if (!otherVal || otherVal.trim().length === 0) return false;
    }
    
    if (Array.isArray(value)) {
      return value.length > 0;
    }

    if (typeof value === "string") {
      return value.trim().length > 0;
    }

    if (typeof value === "boolean") {
      return value !== undefined && value !== null;
    }

    return value !== undefined && value !== null && value !== "";
  }, [currentStep, formData]);

  const handleNext = useCallback(() => {
    if (!isStepComplete()) return;

    if (currentStep < totalSteps - 2) { // Stop before the final step to show review
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowReview(true);
    }
  }, [currentStep, totalSteps, isStepComplete]);

  const handlePrev = useCallback(() => {
    if (showReview) {
      setShowReview(false);
    } else if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep, showReview]);

  const handleInputChange = (value: any, key?: string) => {
    const step = INQUIRY_QUESTIONS[currentStep];
    const dataKey = key || `step_${step.id}`;
    setFormData((prev) => ({ ...prev, [dataKey]: value }));
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        const step = INQUIRY_QUESTIONS[currentStep];
        if (["text", "textarea", "date", "contact"].includes(step.type)) {
          if (isStepComplete()) {
            handleNext();
          }
        }
      }
    },
    [currentStep, handleNext, isStepComplete]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Preparation for Formspree
    // Replace "YOUR_FORMSPREE_ID" with your actual ID later
    const formspreeUrl = "https://formspree.io/f/YOUR_FORMSPREE_ID";
    
    try {
      // Mocking submission for now
      console.log("Submitting to Formspree:", formData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      /* 
      // Ready for Formspree integration:
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setIsSubmitted(true);
      }
      */
      
      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback: still show success for demo if desired or handle errors
      setIsSubmitted(true); 
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderInput = (step: QuestionStep) => {
    const value = formData[`step_${step.id}`] || "";

    switch (step.type) {
      case "text":
      case "contact":
        if (step.type === "contact") {
          return (
            <div className="space-y-6 w-full max-w-xl">
              {step.fields?.map((field) => (
                <div key={field.name} className="space-y-1 text-black">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black opacity-40">{field.label}</label>
                  <input
                    type={field.type || "text"}
                    placeholder={field.placeholder}
                    value={formData[field.name] || ""}
                    onChange={(e) => handleInputChange(e.target.value, field.name)}
                    className="w-full bg-transparent border-b border-black/10 py-3 text-xl outline-none focus:border-black transition-all duration-300 placeholder:text-black/20 text-black"
                  />
                </div>
              ))}
            </div>
          );
        }
        return (
          <input
            autoFocus
            type="text"
            placeholder={step.placeholder}
            value={value}
            onChange={(e) => handleInputChange(e.target.value)}
            className="w-full bg-transparent border-b-2 border-black/10 py-4 text-2xl md:text-3xl outline-none focus:border-black transition-all duration-500 max-w-2xl placeholder:text-black/10 font-bold text-black"
          />
        );

      case "textarea":
        return (
          <div className="w-full max-w-2xl space-y-2">
            <textarea
              autoFocus
              placeholder={step.placeholder}
              value={value}
              onChange={(e) => handleInputChange(e.target.value)}
              rows={1}
              className="w-full bg-transparent border-b-2 border-black/10 py-4 text-2xl md:text-3xl outline-none focus:border-black transition-all duration-500 resize-none overflow-hidden placeholder:text-black/10 font-bold text-black"
              style={{ height: "auto" }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = `${target.scrollHeight}px`;
              }}
            />
          </div>
        );

      case "choice":
      case "multichoice":
      case "boolean":
        const isMulti = step.type === "multichoice";
        const selectedOptions = isMulti ? (Array.isArray(value) ? value : []) : [value];

        return (
          <div className="flex flex-col gap-3 w-full max-w-md">
             {isMulti && <p className="text-[10px] text-black/40 mb-1 uppercase tracking-[0.2em] font-black italic">Select multiple if needed</p>}
            {step.options?.map((option, idx) => {
              const letter = String.fromCharCode(65 + idx);
              const isSelected = selectedOptions.includes(option);
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    if (isMulti) {
                      const newSelection = isSelected
                        ? selectedOptions.filter((o: string) => o !== option)
                        : [...selectedOptions, option];
                      handleInputChange(newSelection);
                    } else {
                      handleInputChange(option);
                      // REMOVED AUTO-SKIP: wait for user to click OK/Continue
                    }
                  }}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 group relative overflow-hidden",
                    isSelected
                      ? "bg-black text-white border-black shadow-lg shadow-black/10"
                      : "bg-white/40 border-black/5 hover:border-black/20 hover:bg-white/60"
                  )}
                >
                  <div className="flex flex-col w-full">
                    <div className="flex items-center gap-4">
                      <span className={cn(
                        "flex items-center justify-center w-7 h-7 border rounded-lg text-[11px] font-black shrink-0 transition-all duration-300",
                        isSelected 
                          ? "bg-white text-black border-transparent" 
                          : "bg-black/5 border-black/10 group-hover:bg-black group-hover:text-white"
                      )}>
                        {step.type === "boolean" ? (option === "Yes" ? "Y" : "N") : letter}
                      </span>
                      <span className={cn("text-lg font-bold tracking-tight", isSelected ? "text-white" : "text-black")}>
                        {option}
                      </span>
                      {isSelected && (
                        <motion.div 
                          layoutId={`check-${option}`}
                          className="ml-auto"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        >
                          <Check className="w-5 h-5 text-white/80" />
                        </motion.div>
                      )}
                    </div>

                    {isSelected && option === "Other" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="w-full mt-4 pt-4 border-t border-white/10"
                      >
                        <input
                          autoFocus
                          type="text"
                          placeholder="Please specify..."
                          value={formData[`step_${step.id}_other`] || ""}
                          onChange={(e) => handleInputChange(e.target.value, `step_${step.id}_other`)}
                          className="w-full bg-white/10 border-b border-white/20 py-2 px-3 outline-none text-white placeholder:text-white/40 font-bold rounded-t-lg focus:bg-white/20 transition-all"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </motion.div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        );

      case "date":
        const today = new Date().toISOString().split("T")[0];
        return (
          <div className="flex flex-col gap-4 w-full max-w-md">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black tracking-widest text-black/30">Project Debut Date</label>
              <input
                type="date"
                min={today}
                value={formData[`step_${step.id}`] || ""}
                onChange={(e) => handleInputChange(e.target.value)}
                className="w-full bg-transparent border-b-2 border-black/10 py-3 text-xl outline-none focus:border-black transition-all font-mono text-black font-bold cursor-pointer"
                style={{ colorScheme: "light" }}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderReview = () => {
    return (
      <div className="w-full max-w-2xl text-black">
        <div className="flex items-center gap-3 mb-8">
          <span className="bg-black text-white w-6 h-6 flex items-center justify-center rounded-lg text-[10px] font-black shadow-lg shadow-black/10">
            ✓
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-black opacity-30">Review Your Vision</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[1.1] mb-12">
          Verify your ticket.
        </h2>

        <div className="bg-white/40 border border-black/[0.03] rounded-xl md:rounded-2xl p-6 md:p-10 space-y-8 relative overflow-hidden backdrop-blur-sm">
          {/* Ticket Aesthetic Decorations */}
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <div className="w-24 h-24 border-4 border-black rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {INQUIRY_QUESTIONS.filter(q => q.type !== 'final').map((question) => {
              const value = formData[`step_${question.id}`];
              let displayValue = Array.isArray(value) ? value.join(', ') : value;
              
              const otherVal = formData[`step_${question.id}_other`];
              if (otherVal && (value === "Other" || (Array.isArray(value) && value.includes("Other")))) {
                if (Array.isArray(value)) {
                  displayValue = displayValue.replace("Other", `Other (${otherVal})`);
                } else {
                  displayValue = `Other (${otherVal})`;
                }
              }
              
              if (!value && question.type !== 'contact' && question.type !== 'date') return null;

              return (
                <div key={question.id} className="space-y-1">
                  <p className="text-[9px] uppercase font-black tracking-[0.2em] opacity-30">ID_{question.id}</p>
                  <p className="text-sm font-black tracking-tight">{displayValue || '---'}</p>
                </div>
              );
            })}
            
            {/* Handle special fields like contact names */}
            {['first_name', 'email', 'budget'].map(key => formData[key] ? (
              <div key={key} className="space-y-1">
                <p className="text-[9px] uppercase font-black tracking-[0.2em] opacity-30">{key.replace('_', ' ')}</p>
                <p className="text-sm font-black tracking-tight">{formData[key]}</p>
              </div>
            ) : null)}
          </div>

          <div className="pt-8 border-t border-black/5 flex flex-col items-center gap-4">
             <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-black text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-4 group active:scale-95 shadow-2xl shadow-black/10"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Send Vision
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
            <p className="text-[10px] font-bold opacity-30 text-center uppercase tracking-widest">Double check before locking it in.</p>
          </div>
        </div>
      </div>
    );
  };

  const renderSuccess = () => (
    <div className="flex flex-col items-center text-center animate-fade-in w-full py-10 text-black">
       <div className="w-24 h-24 bg-black text-white rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl shadow-black/20 rotate-3">
         <Check className="w-12 h-12" strokeWidth={4} />
       </div>
       <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Vision Logged.</h3>
       <p className="text-black/50 max-w-sm mb-12 text-lg font-medium leading-relaxed">
         The protocol has successfully queued your request. Expect a transmission within 24 hours.
       </p>
       <button
        type="button"
        onClick={() => window.location.href = "/"}
        className="group bg-black text-white px-14 py-6 rounded-full font-black text-xl hover:scale-105 transition-all shadow-xl shadow-black/10 active:scale-95 flex items-center gap-4"
      >
        Close Terminal
        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );

  const currentQuestion = INQUIRY_QUESTIONS[currentStep];

  return (
    <div className="w-full flex flex-col bg-[#e5e5e5] border border-black/[0.03] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] p-8 md:p-16 text-black relative font-inter overflow-hidden min-h-[650px] shadow-2xl shadow-black/[0.05]">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-black/[0.03]">
        <motion.div
           className="h-full bg-black/80"
           initial={{ width: 0 }}
           animate={{ width: `${progress}%` }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <div className="flex-1 flex flex-col items-start">
        <AnimatePresence mode="wait" custom={direction}>
          {isSubmitted ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full flex justify-center items-center h-full"
            >
              {renderSuccess()}
            </motion.div>
          ) : showReview ? (
            <motion.div 
              key="review"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full"
            >
              {renderReview()}
            </motion.div>
          ) : (
            <motion.div
              key={currentStep}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col items-start gap-8"
            >
              {/* Question Marker */}
              {currentQuestion.type !== "final" && (
                <div className="flex items-center gap-4">
                  <span className="bg-black text-white w-7 h-7 flex items-center justify-center rounded-xl text-[11px] font-black leading-none shadow-xl shadow-black/10">
                    {currentQuestion.id}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.4em] font-black opacity-20">Protocol Step {currentQuestion.id}/{totalSteps - 1}</span>
                </div>
              )}

              {/* Title & Description */}
              <div className="space-y-4 w-full">
                <h2 className="text-3xl md:text-5.5xl font-black tracking-tighter leading-[1.05] max-w-2xl text-balance">
                  {currentQuestion.title}
                </h2>
                {currentQuestion.description && (
                  <p className="text-black/40 text-lg md:text-2xl max-w-xl leading-relaxed whitespace-pre-line font-bold italic tracking-tight">
                    {currentQuestion.description}
                  </p>
                )}
              </div>

              {/* Input Area */}
              <div className="mt-6 w-full">
                {renderInput(currentQuestion)}
              </div>

              {/* Continue Button */}
              {["text", "textarea", "date", "contact", "multichoice", "choice", "boolean"].includes(currentQuestion.type) && (
                 <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isStepComplete()}
                  className={cn(
                    "mt-12 px-12 py-5 rounded-[2rem] font-black text-lg transition-all flex items-center gap-4 group active:scale-95 border shadow-sm",
                    isStepComplete() 
                      ? "bg-black text-white border-black hover:scale-105" 
                      : "bg-black/5 text-black/20 border-black/5 cursor-not-allowed"
                  )}
                >
                  {currentStep === totalSteps - 2 ? "Finalize Vision" : "Continue"}
                  <div className={cn(
                    "w-8 h-8 rounded-xl flex items-center justify-center transition-colors",
                    isStepComplete() ? "bg-white/10" : "bg-black/5"
                  )}>
                     <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Controls */}
      {!isSubmitted && (
        <div className="mt-16 flex justify-between items-center w-full pt-10 border-t border-black/5">
          <div className="flex flex-col gap-1.5">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-15">
              HRWL Form Engine v2.0
            </p>
            <p className="text-[12px] font-black text-black/40 italic">
              "How you ask is everything"
            </p>
          </div>
          
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 0 && !showReview}
              className="w-14 h-14 flex items-center justify-center bg-black/5 text-black rounded-2xl hover:bg-black hover:text-white disabled:opacity-5 transition-all active:scale-90 shadow-sm"
              aria-label="Previous step"
            >
              <ChevronUp className="w-7 h-7" />
            </button>
             <button
              type="button"
              onClick={() => isStepComplete() && handleNext()}
              disabled={showReview || !isStepComplete()}
              className={cn(
                "w-14 h-14 flex items-center justify-center rounded-2xl transition-all active:scale-90 shadow-sm",
                (showReview || !isStepComplete()) 
                  ? "bg-black/5 text-black/10 cursor-not-allowed opacity-40" 
                  : "bg-black/5 text-black hover:bg-black hover:text-white"
              )}
              aria-label="Next step"
            >
              <ChevronDown className="w-7 h-7" />
            </button>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .text-5.5xl { font-size: 3.5rem; }
      `}} />
    </div>
  );
}
