import AppCard from "@/components/apps/AppCard";
import { APPS_LIST } from "@/data/apps";

export const metadata = {
    title: "Apps | Anwer Solangi",
    description: "Browse mobile apps and extensions created by Anwer Solangi. React Native apps, Chrome extensions, and more.",
    openGraph: {
        title: "Apps | Anwer Solangi",
        description: "Browse mobile apps and extensions created by Anwer Solangi.",
        type: "website",
    },
};

export default function AppsPage() {
    return (
        <main className="container mx-auto px-4 pt-32 pb-12">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">My Apps</h1>
            <p className="text-lg text-center mb-16 text-gray-600 max-w-2xl mx-auto">
                Check out some of the apps I&apos;ve built. Each one is crafted with attention to detail and user experience.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                {APPS_LIST.map((app) => (
                    <AppCard key={app.slug} app={app} />
                ))}
            </div>
        </main>
    );
}
