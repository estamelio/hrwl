import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import djamelPhoto from "@/assets/about-hrwl.png";
import voiceNoteAudio from "@/assets/about-voice-note.mp3";

const subtitles = [
    { start: 0, end: 2.5, text: "Oh, hello there stranger!" },
    { start: 2.5, end: 5, text: "I hope you're having a lovely day —" },
    { start: 5, end: 9, text: "and I surely do hope you find my website to be as cool as I intended it to be." },
    { start: 9, end: 12, text: "You're probably here for one of two reasons:" },
    { start: 12, end: 14.5, text: "Either you're just curious —" },
    { start: 14.5, end: 17, text: "exploring every corner, checking the designs," },
    { start: 17, end: 21, text: "trying to get a little sneak peek of who I am, what I do," },
    { start: 21, end: 24, text: "maybe even… stalking me 👀" },
    { start: 24, end: 30, text: "Or, you're here because you want to hire me for a project similar to what you've seen in my case studies." },
    { start: 30, end: 33, text: "In anyway, this section's just about me." },
    { start: 33, end: 38, text: "I figured it'd be nicer to record a voice note instead of making you read a wall of text just to get to know me." },
    { start: 38, end: 41, text: "(you still have the option to read tho)" },
    { start: 41, end: 45, text: "So— if you haven't seen my name already, I'm Djamel," },
    { start: 45, end: 49, text: "a freelance motion designer who specializes in brand films and commercials" },
    { start: 49, end: 53, text: "for brands that value creative solutions to business problems." },
    { start: 53, end: 56, text: "But that's not all who I am though." },
    { start: 56, end: 60, text: "I'm also a total nerd — I love games like Pokémon, Sonic, Mario, Zelda," },
    { start: 60, end: 63, text: "(also been playing Dispatch a lot lately)" },
    { start: 63, end: 66, text: "I'm definitely addicted to coffee. ☕" },
    { start: 66, end: 71, text: "I love the gym, reading, writing stories and poems, doing voiceovers," },
    { start: 71, end: 75, text: "and— maybe most importantly— cooking and baking." },
    { start: 75, end: 80, text: "I'm a huge Game of Thrones fan — read the books, watched the series… like six times (no shame)." },
    { start: 80, end: 85, text: "And of course, I love anime — Demon Slayer and Attack on Titan are my top picks." },
    { start: 85, end: 89, text: "Anyway, that was me — thanks for stopping by and listening (or reading)." },
    { start: 89, end: 93, text: "I hope my work speaks to you as much as I've spoken here." },
    { start: 93, end: 97, text: "Now go finish stalking— there's a lot of motion waiting for you out there." },
    { start: 97, end: 100, text: "Bybye 👋" },
];

const VoiceNotePlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(100);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio(voiceNoteAudio);

        audioRef.current.addEventListener('loadedmetadata', () => {
            if (audioRef.current) {
                setDuration(audioRef.current.duration);
            }
        });

        audioRef.current.addEventListener('timeupdate', () => {
            if (audioRef.current) {
                setCurrentTime(audioRef.current.currentTime);
            }
        });

        audioRef.current.addEventListener('ended', () => {
            setIsPlaying(false);
            setCurrentTime(0);
        });

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const getVisibleSubtitles = () => {
        const currentIndex = subtitles.findIndex(
            (subtitle) => currentTime >= subtitle.start && currentTime < subtitle.end
        );

        if (currentIndex === -1) return [];

        const visible = [];
        if (currentIndex > 0) visible.push({ ...subtitles[currentIndex - 1], opacity: 0.3 });
        visible.push({ ...subtitles[currentIndex], opacity: 1 });
        if (currentIndex < subtitles.length - 1) visible.push({ ...subtitles[currentIndex + 1], opacity: 0.3 });

        return visible;
    };

    const togglePlayPause = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!audioRef.current) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = x / rect.width;
        const newTime = percentage * duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const visibleSubtitles = getVisibleSubtitles();
    const progress = (currentTime / duration) * 100;

    return (
        <div className="w-full bg-surface/30 backdrop-blur-sm rounded-[2.5rem] p-10 md:p-16 border border-border/50">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Photo */}
                <div className="flex-shrink-0">
                    <div className="w-56 h-56 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border-4 border-foreground/10 hover-lift shadow-2xl">
                        <img
                            src={djamelPhoto}
                            alt="Djamel Haroual"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Player & Subtitles */}
                <div className="flex-1 w-full">
                    {/* Header */}
                    <div className="mb-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-muted-foreground'}`} />
                            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                Voice Note
                            </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-2">
                            A Personal Introduction
                        </h3>
                        <p className="text-lg text-muted-foreground">
                            Press play to hear from Djamel
                        </p>
                    </div>

                    {/* Subtitles Display */}
                    <div className="mb-10 min-h-[140px] flex items-center">
                        <div className="space-y-2 w-full">
                            {visibleSubtitles.map((subtitle, idx) => (
                                <p
                                    key={idx}
                                    className="text-2xl md:text-3xl font-medium leading-relaxed transition-all duration-700 ease-out"
                                    style={{
                                        opacity: subtitle.opacity,
                                        transform: subtitle.opacity === 1 ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.95)',
                                    }}
                                >
                                    {subtitle.text}
                                </p>
                            ))}
                            {!isPlaying && currentTime === 0 && (
                                <p className="text-2xl md:text-3xl font-medium text-muted-foreground italic animate-fade-up">
                                    Click play to start...
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Player Controls */}
                    <div className="space-y-4">
                        {/* Progress Bar */}
                        <div
                            className="relative h-2 bg-border rounded-full cursor-pointer group"
                            onClick={handleSeek}
                        >
                            <div
                                className="absolute inset-y-0 left-0 bg-foreground rounded-full transition-all"
                                style={{ width: `${progress}%` }}
                            />
                            <div
                                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{ left: `${progress}%`, transform: 'translate(-50%, -50%)' }}
                            />
                        </div>

                        {/* Controls Row */}
                        <div className="flex items-center justify-between">
                            <button
                                onClick={togglePlayPause}
                                className="w-20 h-20 rounded-full bg-foreground text-background flex items-center justify-center hover-lift hover:scale-105 transition-transform shadow-xl"
                            >
                                {isPlaying ? (
                                    <Pause className="w-8 h-8" fill="currentColor" />
                                ) : (
                                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                                )}
                            </button>

                            <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
                                <span>{Math.floor(currentTime / 60)}:{String(Math.floor(currentTime % 60)).padStart(2, '0')}</span>
                                <span>/</span>
                                <span>{Math.floor(duration / 60)}:{String(Math.floor(duration % 60)).padStart(2, '0')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VoiceNotePlayer;
