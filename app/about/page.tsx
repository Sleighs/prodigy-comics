import Image from 'next/image';
import PageHeader from '../../components/PageHeader';
import GetInTouch from '../../components/GetInTouch';
import MilitaryGetInTouch from '@/components/MilitaryGetInTouch';
import MilitaryCreativeTeam from '@/components/MilitaryCreativeTeam';
import WhoWeAre from '@/components/WhoWeAre';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <PageHeader 
        title="About"
        backgroundImage="/images/prodigy-banner.png"
        subtitle="Meet the creators of Prodigy"
      />

      {/* Who We Are Section */}
      <WhoWeAre />

      {/* Creative Team Section */}
      <MilitaryCreativeTeam />

      {/* Contact Section */}
      <MilitaryGetInTouch />
    </div>
  );
} 