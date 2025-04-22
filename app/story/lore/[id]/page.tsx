import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { lore } from '@/data/lore';

interface LorePageProps {
    params: {
        id: string;
    };
}

export default function LorePage({ params }: LorePageProps) {
    // Find the lore entry across all categories
    const loreEntry = 
        lore.events.find(e => e.id === params.id) ||
        lore.locations.find(l => l.id === params.id) ||
        lore.artifacts.find(a => a.id === params.id) ||
        lore.organizations.find(o => o.id === params.id);

    if (!loreEntry) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-16">
            {/* Hero Section */}
            <section className="relative py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        {loreEntry.name}
                    </h1>
                    <p className="text-xl text-gray-300 mb-8">
                        {loreEntry.description}
                    </p>
                    {loreEntry.significance && (
                        <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
                            <h2 className="text-xl font-bold mb-2">Significance</h2>
                            <p className="text-gray-300">{loreEntry.significance}</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Details Section */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Left Column - Main Details */}
                        <div className="space-y-8">
                            {loreEntry.location && (
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Location</h2>
                                    <p className="text-gray-300">{loreEntry.location}</p>
                                </div>
                            )}

                            {loreEntry.participants && (
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Participants</h2>
                                    <div className="flex flex-wrap gap-2">
                                        {loreEntry.participants.map((participant) => (
                                            <span key={participant} className="bg-gray-700 px-3 py-1 rounded-full">
                                                {participant}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {loreEntry.members && (
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Members</h2>
                                    <div className="flex flex-wrap gap-2">
                                        {loreEntry.members.map((member) => (
                                            <span key={member} className="bg-gray-700 px-3 py-1 rounded-full">
                                                {member}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {loreEntry.outcomes && (
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Outcomes</h2>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        {loreEntry.outcomes.map((outcome, index) => (
                                            <li key={index}>{outcome}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Right Column - Related Information */}
                        <div className="space-y-8">
                            {loreEntry.factions && (
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Related Factions</h2>
                                    <div className="flex flex-wrap gap-2">
                                        {loreEntry.factions.map((faction) => (
                                            <Link 
                                                key={faction}
                                                href={`/story/factions/${faction.toLowerCase()}`}
                                                className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-full transition-colors"
                                            >
                                                {faction}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {loreEntry.controlledBy && (
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Controlled By</h2>
                                    <Link 
                                        href={`/story/factions/${loreEntry.controlledBy.toLowerCase()}`}
                                        className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-full transition-colors"
                                    >
                                        {loreEntry.controlledBy}
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <Link 
                        href="/story"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        ← Back to Story
                    </Link>
                </div>
            </section>
        </main>
    );
}