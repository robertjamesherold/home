import { Badge } from '../ui/badge';

const partners = [
  { name: 'BDH', description: 'Bund Deutscher Heilpraktiker' },
  { name: 'VFP', description: 'Verband Freier Psychotherapeuten' },
  { name: 'TCM', description: 'TCM Verband' },
  { name: 'Naturheilkunde', description: 'Fachverband' },
];

export function TrustSignals() {
  return (
    <section className="bg-slate-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Trust Statement */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-slate-700">
            Über 15 Jahre Erfahrung in der Naturheilkunde
          </p>
          <h2 className="mb-8 text-slate-900">
            Vertrauen Sie auf unsere Expertise
          </h2>
        </div>

        {/* Partner Logos */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 opacity-60 transition-opacity hover:opacity-100"
            >
              <Badge variant="outline" className="px-6 py-2 text-lg">
                {partner.name}
              </Badge>
              <span className="text-slate-600">{partner.description}</span>
            </div>
          ))}
        </div>

        {/* Practitioner Section */}
        <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div></div>
            <div className="space-y-4">
              <h3 className="text-slate-900">Dr. med. Sarah Müller</h3>
              <p className="text-green-600">
                Heilpraktikerin & TCM-Spezialistin
              </p>
              <p className="text-slate-600">
                Mit über 15 Jahren Erfahrung in der Naturheilkunde und
                traditionellen chinesischen Medizin helfe ich meinen Patienten,
                ihre Gesundheit auf natürliche Weise wiederherzustellen und zu
                erhalten.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                <Badge>Akupunktur</Badge>
                <Badge>TCM</Badge>
                <Badge>Kräuterheilkunde</Badge>
                <Badge>Ernährungsberatung</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
