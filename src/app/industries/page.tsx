import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Industries from '@/components/Industries';
import Footer from '@/components/Footer';

const projects = [
  { customer: "Morgan Stanley", type: "PU Coating / Dustproof Coating", year: "2022-23", place: "Mumbai", area: "30000", uom: "Sqm" },
  { customer: "Morgan Stanley", type: "PU Car Deck Coating", year: "2024", place: "Mumbai", area: "47000", uom: "Sqm" },
  { customer: "INS SHIKRA (MES)", type: "EPOXY FLOORING", year: "2023-24", place: "Mumbai", area: "3000", uom: "Sqm" },
  { customer: "Savvy Project / GIFT CITY", type: "PU Car Deck Coating", year: "2021", place: "GIFT City Gujarat", area: "10580", uom: "Sqm" },
  { customer: "Conncetwell Industries", type: "Epoxy flooring", year: "2023-24", place: "Mumbai", area: "3500", uom: "Sqm" },
  { customer: "Evonik Labs Thane", type: "EPU Flooring", year: "2023", place: "Mumbai", area: "2550", uom: "Sqm" },
  { customer: "GOA Waste Management Corporation", type: "Epoxy flooring", year: "2021", place: "Cacora, South Goa", area: "2550", uom: "Sqm" },
  { customer: "TAJ Stat Office", type: "Underlayment", year: "2023", place: "Mumbai airport", area: "1780", uom: "Sqm" },
  { customer: "Phoenix Pharma", type: "EPU flooring", year: "2024", place: "New Mumbai", area: "780", uom: "Sqm" },
  { customer: "BMC Mumbai", type: "PU Concrete", year: "2025", place: "Pise Panjar pol water pump", area: "2130", uom: "Sqm" },
  { customer: "KTR Coupling", type: "Epoxy Flooring", year: "2025", place: "Bhosari Pune", area: "1300", uom: "Sqm" },
  { customer: "JSW (Morena house)", type: "PU car Deck flooring", year: "2024", place: "Mumbai", area: "2175", uom: "Sqm" },
  { customer: "Blue Grass", type: "Epoxy Flooring", year: "2024", place: "Pune", area: "4200", uom: "Sqm" },
  { customer: "CTRL S Data Center", type: "PU / Epoxy Flooring", year: "2024", place: "New Mumbai", area: "1188", uom: "Sqm" },
  { customer: "Dassault System", type: "PU Coating", year: "2022", place: "Pune", area: "4200", uom: "Sqm" }
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <Hero
        title="Industries We Serve"
        subtitle="Specialized flooring solutions across diverse sectors"
        height="h-96"
      />
      <Industries />

      {/* Completed Projects Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown mb-6">Completed Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A showcase of our successful flooring installations across various industries and locations.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-brown text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Customer</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Type of Flooring</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Year</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Place</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Area</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">UOM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {projects.map((project, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{project.customer}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{project.type}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{project.year}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{project.place}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{project.area}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{project.uom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
