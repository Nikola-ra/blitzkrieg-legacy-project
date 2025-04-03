
import { Separator } from "@/components/ui/separator";

const ImpattoSection = () => {
  return (
    <section id="impatto" className="historical-section bg-history-dark text-white">
      <div className="container mx-auto">
        <h2 className="section-title">Effetti e Impatto della Guerra</h2>
        <Separator className="mx-auto w-24 h-1 bg-history-accent mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="section-subtitle">Conseguenze Militari</h3>
            <p className="content-paragraph">
              La Blitzkrieg rivoluzionò la dottrina militare moderna. Le nazioni furono costrette a ripensare completamente le loro strategie difensive e offensive. La linea Maginot, simbolo della mentalità difensiva statica della Prima Guerra Mondiale, si dimostrò obsoleta di fronte alla mobilità e alla flessibilità della guerra lampo.
            </p>
            <p className="content-paragraph">
              Gli Stati Uniti, l'Unione Sovietica e gli altri Alleati adottarono progressivamente elementi della Blitzkrieg, sviluppando proprie versioni di guerra mobile. I sovietici, in particolare, perfezionarono la "guerra profonda" (Deep Battle), mentre gli americani eccelsero nelle operazioni anfibie combinate.
            </p>
            
            <div className="bg-history-dark/50 p-6 rounded-lg border border-history-muted/30 mt-8">
              <h4 className="text-xl font-bold mb-4 text-history-accent">I Limiti della Blitzkrieg</h4>
              <p className="mb-2">
                Nonostante i successi iniziali, la Blitzkrieg mostrava limiti intrinseci:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dipendenza dalle infrastrutture (strade, ponti) e dalle condizioni climatiche favorevoli</li>
                <li>Difficoltà nella guerra urbana e in terreni difficili</li>
                <li>Necessità di rifornimenti continui di carburante e munizioni</li>
                <li>Inefficacia contro nemici con territori vasti e risorse abbondanti</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="section-subtitle">Impatto Ideologico e Propagandistico</h3>
            <p className="content-paragraph">
              I successi militari della Blitzkrieg vennero sfruttati massicciamente dalla propaganda nazista. Le vittorie rapide e schiaccianti rinforzavano l'immagine di invincibilità della Germania e la presunta superiorità della razza ariana, alimentando il culto di Hitler come genio militare.
            </p>
            <p className="content-paragraph">
              I cinegiornali della Deutsche Wochenschau mostravano immagini trionfali di carri armati tedeschi che avanzavano attraverso città conquistate, soldati che marciavano sotto l'Arco di Trionfo a Parigi, e civili che accoglievano le truppe con il saluto nazista.
            </p>
            
            <div className="mt-8">
              <blockquote className="quote-block">
                "Oggi la Germania, domani il mondo intero."
                <footer className="text-right text-lg mt-2">— Slogan propagandistico nazista</footer>
              </blockquote>
            </div>
            
            <div className="bg-history-dark/50 p-6 rounded-lg border border-history-muted/30 mt-8">
              <h4 className="text-xl font-bold mb-4 text-history-accent">Conseguenze per le Popolazioni Civili</h4>
              <p>
                La Blitzkrieg non era solo una strategia militare ma parte di una guerra totale. Le popolazioni civili subivano bombardamenti aerei, occupazione, sfruttamento economico e, in molti casi, persecuzione razziale. L'iniziale shock psicologico creato dalla fulminea avanzata tedesca generava ondate di profughi che congestionavano le strade, intralciando ulteriormente la risposta militare delle nazioni invase.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="section-subtitle text-center">L'Eredità Storica</h3>
          <p className="content-paragraph text-center">
            Oltre settant'anni dopo, la Blitzkrieg rimane un caso di studio fondamentale nelle accademie militari di tutto il mondo. I suoi principi di concentrazione di forze, mobilità, sorpresa e coordinamento interforze continuano a influenzare la dottrina militare contemporanea.
          </p>
          <p className="content-paragraph text-center">
            La guerra lampo rappresenta anche un monito sulla rapidità con cui possono evolversi i conflitti moderni e sull'importanza dell'adattamento alle nuove tecnologie e strategie. La lezione più importante resta quella di non combattere le guerre future con le tattiche del passato.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpattoSection;
