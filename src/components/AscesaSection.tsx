
import { Separator } from "@/components/ui/separator";

const AscesaSection = () => {
  return (
    <section id="ascesa" className="historical-section bg-history-dark text-white">
      <div className="container mx-auto">
        <h2 className="section-title">L'Ascesa di Hitler e il Riarmo</h2>
        <Separator className="mx-auto w-24 h-1 bg-history-accent mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="section-subtitle">La presa del potere (1933)</h3>
            <p className="content-paragraph">
              Il 30 gennaio 1933, Adolf Hitler venne nominato Cancelliere della Germania. La sua ascesa al potere avvenne in un contesto di profonda crisi economica e sociale, seguito dalla Grande Depressione del 1929, che aveva devastato l'economia tedesca già indebolita dalle riparazioni di guerra.
            </p>
            <p className="content-paragraph">
              Una volta al potere, Hitler instaurò rapidamente un regime totalitario. Con l'incendio del Reichstag e l'emanazione del "Decreto dell'incendio del Reichstag", furono sospese le libertà civili. Nel marzo 1933, il Parlamento tedesco approvò la "Legge dei pieni poteri", concedendo a Hitler l'autorità di governare per decreto.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?auto=format&fit=crop&q=80"
              alt="Hitler durante un discorso pubblico"
              className="historical-image max-w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="section-subtitle text-center">Il Piano Quadriennale (1936)</h3>
          <p className="content-paragraph text-center">
            Nel 1936, Hitler annunciò il Piano Quadriennale, un programma economico ambizioso sotto la direzione di Hermann Göring. L'obiettivo principale era rendere la Germania autosufficiente e prepararla alla guerra entro quattro anni.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-history-dark/50 p-6 rounded-lg border border-history-muted/30">
              <h4 className="text-xl font-bold mb-4 text-history-accent">Autarchia Economica</h4>
              <p className="text-base">
                Sviluppo di materiali sintetici come la gomma (Buna) e i carburanti artificiali per ridurre la dipendenza dalle importazioni. Aumento della produzione di acciaio, che passò da 4 milioni di tonnellate nel 1933 a oltre 22 milioni nel 1939.
              </p>
            </div>
            
            <div className="bg-history-dark/50 p-6 rounded-lg border border-history-muted/30">
              <h4 className="text-xl font-bold mb-4 text-history-accent">Industria Bellica</h4>
              <p className="text-base">
                Massiccia riconversione industriale verso la produzione di armamenti. Creazione di nuove fabbriche e ampliamento di quelle esistenti. Investimenti nell'industria pesante per la produzione di carri armati, aerei e navi.
              </p>
            </div>
            
            <div className="bg-history-dark/50 p-6 rounded-lg border border-history-muted/30">
              <h4 className="text-xl font-bold mb-4 text-history-accent">Militarizzazione</h4>
              <p className="text-base">
                Reintroduzione della coscrizione obbligatoria nel 1935, violando apertamente il Trattato di Versailles. Espansione dell'esercito da 100.000 a oltre 1,4 milioni di uomini entro il 1939. Creazione della Luftwaffe, l'aeronautica militare tedesca.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <blockquote className="quote-block">
            "Dobbiamo essere pronti per la guerra entro quattro anni. L'economia tedesca deve essere pronta per la guerra entro quattro anni."
            <footer className="text-right text-lg mt-2">— Adolf Hitler al Gabinetto Tedesco, 1936</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AscesaSection;
