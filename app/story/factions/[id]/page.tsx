import Image from 'next/image';
import Link from 'next/link';
import { lore } from '@/data/lore';
import { notFound } from 'next/navigation';

interface FactionPageProps {
    params: {
        id: string;
    };
}

export default function FactionPage({ params }: FactionPageProps) {
    const faction = lore.factions.find(f => f.id === params.id);
    
    if (!faction) {
        notFound();
    }

    const currentIndex = lore.factions.findIndex(f => f.id === params.id);
    const nextFaction = lore.factions[(currentIndex + 1) % lore.factions.length];
    const prevFaction = lore.factions[(currentIndex - 1 + lore.factions.length) % lore.factions.length];

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-16">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/70" />
                    <Image
                        src={faction.hero}
                        alt={faction.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-roboto-condensed">
                        {faction.name}
                    </h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                        {faction.subtitle}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* History Section */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold font-roboto-condensed">History</h2>
                            {faction.history.map((paragraph, index) => (
                                <p key={index} className="text-lg leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Organization Section */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold font-roboto-condensed">Organization</h2>
                            {faction.organization?.map((paragraph, index) => (
                                <p key={index} className="text-lg leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                            {faction.virtues && (
                                <div className="mt-6">
                                    <h3 className="text-2xl font-bold mb-4">The Seven Virtues</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {faction.virtues.map((virtue) => (
                                            <span key={virtue} className="text-sm bg-gray-700 px-3 py-1 rounded-full">
                                                {virtue}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div className="mt-6">
                                <p className="text-2xl font-bold text-red-500 font-roboto-condensed">
                                    {faction.quote}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Media Section */}
                    <div className="mt-20">
                        <h2 className="text-3xl font-bold mb-8 font-roboto-condensed text-center">Media</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-2xl font-bold mb-4 font-roboto-condensed">Official Trailer</h3>
                                <div className="relative aspect-video">
                                    <iframe
                                        src={faction.trailer.replace('watch?v=', 'embed/')}
                                        title={`${faction.name} Trailer`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-2xl font-bold mb-4 font-roboto-condensed">Gallery</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {faction.gallery.map((image, index) => (
                                        <div key={index} className="relative aspect-square">
                                            <Image
                                                src={image}
                                                alt={`${faction.name} Gallery Image ${index + 1}`}
                                                fill
                                                className="object-cover rounded-lg"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="mt-20 flex justify-between">
                        <Link 
                            href={`/story/factions/${prevFaction.id}`} 
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            ← {prevFaction.name}
                        </Link>
                        <Link 
                            href={`/story/factions/${nextFaction.id}`} 
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            {nextFaction.name} →
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
} 