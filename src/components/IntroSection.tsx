import { Separator } from "@/components/ui/separator"

const IntroSection = () => {
  return (
    <section id="intro" className="historical-section bg-history-light">
      <div className="container mx-auto">
        <h2 className="section-title">Contesto Storico</h2>
        <Separator className="mx-auto w-24 h-1 bg-history-accent mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="section-subtitle">Il Trattato di Versailles</h3>
            <p className="content-paragraph">
              Al termine della Prima Guerra Mondiale, il Trattato di Versailles
              (1919) impose alla Germania condizioni particolarmente severe. Il
              paese fu obbligato a cedere territori, a limitare drasticamente le
              proprie forze armate e a pagare ingenti riparazioni di guerra.
            </p>
            <p className="content-paragraph">
              L'esercito tedesco venne ridotto a soli 100.000 uomini, la marina
              a 15.000, mentre l'aviazione militare fu completamente vietata. La
              produzione di armamenti pesanti, carri armati, sottomarini e aerei
              da guerra venne proibita.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/blitzkrieg-legacy-project/images/versailles.png"
              alt="Immagine della firma del Trattato di Versailles"
              className="historical-image max-w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <img
              src="/blitzkrieg-legacy-project/images/rapallo.png"
              alt="Rappresentazione delle conseguenze economiche post-guerra"
              className="historical-image max-w-full h-auto rounded-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="section-subtitle">L'accordo di Rapallo</h3>
            <p className="content-paragraph">
              Nel 1922, la Germania e l'Unione Sovietica firmarono il Trattato
              di Rapallo, che stabilì relazioni diplomatiche ed economiche tra i
              due paesi, entrambi isolati dalla comunità internazionale. Questo
              accordo fornì alla Germania l'opportunità di eludere le
              restrizioni del Trattato di Versailles.
            </p>
            <p className="content-paragraph">
              Grazie a questo accordo segreto, la Germania poté sviluppare e
              testare armamenti sul territorio sovietico, lontano dagli occhi
              delle potenze occidentali. Carri armati, aerei e altre tecnologie
              militari vennero sviluppate in queste basi segrete, preparando il
              terreno per il futuro riarmo tedesco.
            </p>
          </div>
        </div>

        <div className="mt-8 max-w-3xl mx-auto">
          <blockquote className="quote-block">
            "Il Trattato di Versailles contiene le basi di un'altra guerra
            mondiale."
            <footer className="text-right text-lg mt-2">
              — Marshal Ferdinand Foch, 1919
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
