import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { lore } from '@/data/lore';

interface WikiPageProps {
    params: {
        id: string;
    };
}

export default function WikiPage({ params }: WikiPageProps) {
    // Find the entry across all categories
    const entry = 
        lore.factions.find(f => f.id === params.id) ||
        lore.events.find(e => e.id === params.id) ||
        lore.locations.find(l => l.id === params.id) ||
        lore.artifacts.find(a => a.id === params.id) ||
        lore.organizations.find(o => o.id === params.id);

    if (!entry) {
        notFound();
    }

    // Determine entry type for conditional rendering
    const isFaction = lore.factions.some(f => f.id === params.id);

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-16">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/70" />
                    {isFaction && entry.hero && (
                        <Image
                            src={entry.hero}
                            alt={entry.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    )}
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        {entry.name}
                    </h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                        {isFaction ? entry.subtitle : entry.description}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    {isFaction ? (
                        // Faction Content
                        <>
                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold">History</h2>
                                    {entry.history.map((paragraph, index) => (
                                        <p key={index} className="text-lg leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold">Organization</h2>
                                    {entry.organization?.map((paragraph, index) => (
                                        <p key={index} className="text-lg leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                    {entry.virtues && (
                                        <div className="mt-6">
                                            <h3 className="text-2xl font-bold mb-4">The Seven Virtues</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {entry.virtues.map((virtue) => (
                                                    <span key={virtue} className="text-sm bg-gray-700 px-3 py-1 rounded-full">
                                                        {virtue}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {entry.quote && (
                                        <div className="mt-6">
                                            <p className="text-2xl font-bold text-red-500">
                                                {entry.quote}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Media Section for Factions */}
                            <div className="mt-20">
                                <h2 className="text-3xl font-bold mb-8 text-center">Media</h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    {entry.trailer && (
                                        <div className="bg-gray-800 p-6 rounded-lg">
                                            <h3 className="text-2xl font-bold mb-4">Official Trailer</h3>
                                            <div className="relative aspect-video">
                                                <iframe
                                                    src={entry.trailer.replace('watch?v=', 'embed/')}
                                                    title={`${entry.name} Trailer`}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    className="absolute inset-0 w-full h-full rounded-lg"
                                                />
                                            </div>
                                        </div>
                                    )}
                                    {entry.gallery && (
                                        <div className="bg-gray-800 p-6 rounded-lg">
                                            <h3 className="text-2xl font-bold mb-4">Gallery</h3>
                                            <div className="grid grid-cols-2 gap-4">
                                                {entry.gallery.map((image, index) => (
                                                    <div key={index} className="relative aspect-square">
                                                        <Image
                                                            src={image}
                                                            alt={`${entry.name} Gallery Image ${index + 1}`}
                                                            fill
                                                            className="object-cover rounded-lg"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </>
                    ) : (
                        // Lore Content
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-8">
                                {entry.significance && (
                                    <div className="bg-gray-800/50 p-6 rounded-lg">
                                        <h2 className="text-xl font-bold mb-2">Significance</h2>
                                        <p className="text-gray-300">{entry.significance}</p>
                                    </div>
                                )}

                                {entry.location && (
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4">Location</h2>
                                        <p className="text-gray-300">{entry.location}</p>
                                    </div>
                                )}

                                {entry.outcomes && (
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4">Outcomes</h2>
                                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                                            {entry.outcomes.map((outcome, index) => (
                                                <li key={index}>{outcome}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-8">
                                {entry.participants && (
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4">Participants</h2>
                                        <div className="flex flex-wrap gap-2">
                                            {entry.participants.map((participant) => (
                                                <span key={participant} className="bg-gray-700 px-3 py-1 rounded-full">
                                                    {participant}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {entry.factions && (
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4">Related Factions</h2>
                                        <div className="flex flex-wrap gap-2">
                                            {entry.factions.map((faction) => (
                                                <Link 
                                                    key={faction}
                                                    href={`/story/wiki/${faction.toLowerCase()}`}
                                                    className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-full transition-colors"
                                                >
                                                    {faction}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
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