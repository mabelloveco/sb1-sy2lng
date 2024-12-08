{/* Previous AboutUs code with updated branding */}
const timeline = [
  {
    year: '2020',
    title: 'To-Coupon Launches',
    description: 'Started with a mission to make online shopping more affordable.'
  },
  {
    year: '2021',
    title: 'Mobile App Release',
    description: 'Launched our mobile app to help users save on-the-go.'
  },
  {
    year: '2022',
    title: '1M Users Milestone',
    description: 'Celebrated helping over a million users save money.'
  },
  {
    year: '2023',
    title: 'AI Integration',
    description: 'Introduced AI-powered deal recommendations and verification.'
  }
];

export default function AboutUs() {
  return (
    // ... rest of the component with "To-Coupon" branding
    <div className="prose prose-indigo">
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        At To-Coupon, we believe everyone should have access to the best deals and savings 
        opportunities. We're dedicated to making online shopping more affordable by providing 
        verified coupon codes, cash back offers, and exclusive deals from thousands of retailers.
      </p>
      {/* ... rest of the component */}
    </div>
  );
}