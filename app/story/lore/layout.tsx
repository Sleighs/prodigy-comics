import Footer from "@/components/Footer";

export default function LoreLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen">
            {children}
            <Footer />
        </div>
    );
}