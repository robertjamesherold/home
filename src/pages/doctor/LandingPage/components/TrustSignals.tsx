import { Badge } from '../ui/badge';

const partners = [
  { name: 'BDH', description: 'Bund Deutscher Heilpraktiker' },
  { name: 'VFP', description: 'Verband Freier Psychotherapeuten' },
  { name: 'TCM', description: 'TCM Verband' },
  { name: 'Naturheilkunde', description: 'Fachverband' }
];

export function TrustSignals() {
  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Trust Statement */}
        <div className="text-center mb-12">
          <p className="text-slate-700 mb-4">
            Über 15 Jahre Erfahrung in der Naturheilkunde
          </p>
          <h2 className="text-slate-900 mb-8">
            Vertrauen Sie auf unsere Expertise
          </h2>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
            >
              <Badge variant="outline" className="text-lg px-6 py-2">
                {partner.name}
              </Badge>
              <span className="text-slate-600">{partner.description}</span>
            </div>
          ))}
        </div>

        {/* Practitioner Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
      
            </div>
            <div className="space-y-4">
              <h3 className="text-slate-900">
                Dr. med. Sarah Müller
              </h3>
              <p className="text-green-600">Heilpraktikerin & TCM-Spezialistin</p>
              <p className="text-slate-600">
                Mit über 15 Jahren Erfahrung in der Naturheilkunde und traditionellen 
                chinesischen Medizin helfe ich meinen Patienten, ihre Gesundheit auf 
                natürliche Weise wiederherzustellen und zu erhalten.
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
