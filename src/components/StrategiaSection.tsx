import { useState } from "react"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Flag, Map, Sword } from "lucide-react"

const timelineEvents = [
  {
    year: "1939",
    title: "Invasione della Polonia",
    description:
      "Il 1° settembre 1939, la Germania invase la Polonia, dando ufficialmente inizio alla Seconda Guerra Mondiale. Utilizzando la tattica della Blitzkrieg, l'esercito tedesco (Wehrmacht) impiegò divisioni corazzate (Panzer) supportate dall'aviazione (Luftwaffe) per sfondare le linee polacche.",
    outcomes:
      "In meno di un mese, la Polonia venne sconfitta e divisa tra Germania e Unione Sovietica secondo i termini del patto Molotov-Ribbentrop.",
  },
  {
    year: "1940",
    title: "Conquista dell'Europa Occidentale",
    description:
      "Nell'aprile 1940, la Germania invase Danimarca e Norvegia. A maggio, le forze tedesche lanciarono un'offensiva contro Francia, Belgio, Paesi Bassi e Lussemburgo. Aggirando la Linea Maginot attraverso le Ardenne, considerato un terreno impraticabile dai francesi, i Panzer tedeschi avanzarono rapidamente verso il canale della Manica.",
    outcomes:
      "La Francia fu costretta a firmare l'armistizio il 22 giugno 1940. L'intera campagna occidentale durò appena sei settimane, dimostrando l'efficacia devastante della Blitzkrieg.",
  },
  {
    year: "1941",
    title: "Operazione Barbarossa",
    description:
      "Il 22 giugno 1941, la Germania lanciò l'Operazione Barbarossa, l'invasione dell'Unione Sovietica. Con oltre 3 milioni di soldati, 3.600 carri armati e 2.700 aerei, fu la più grande operazione militare della storia. La strategia prevedeva rapide avanzate per accerchiare e distruggere l'Armata Rossa prima dell'inverno.",
    outcomes:
      "Nonostante i successi iniziali, l'avanzata tedesca si fermò alle porte di Mosca a dicembre, quando l'inverno russo e la resistenza sovietica iniziarono a minare l'efficacia della Blitzkrieg.",
  },
  {
    year: "1942-43",
    title: "Battaglia di Stalingrado",
    description:
      "Nell'estate 1942, Hitler ordinò un'offensiva verso il Caucaso e Stalingrado per conquistare i campi petroliferi sovietici. La battaglia di Stalingrado (agosto 1942 - febbraio 1943) segnò una svolta decisiva nella guerra. I tedeschi rimasero intrappolati in combattimenti urbani casa per casa, perdendo il vantaggio della mobilità.",
    outcomes:
      "La sconfitta a Stalingrado, con la perdita della Sesta Armata (91.000 prigionieri), segnò la fine dell'avanzata tedesca e l'inizio del declino della Wehrmacht sul fronte orientale.",
  },
]

const StrategiaSection = () => {
  const [activeTab, setActiveTab] = useState("concetto")

  return (
    <section id="strategia" className="historical-section bg-history-light">
      <div className="container mx-auto">
        <h2 className="section-title">La Strategia della Blitzkrieg</h2>
        <Separator className="mx-auto w-24 h-1 bg-history-accent mb-12" />

        <div className="mb-16">
          <Tabs
            defaultValue="concetto"
            onValueChange={setActiveTab}
            className="w-full max-w-4xl mx-auto"
          >
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto mb-8 bg-history-muted/30">
              <TabsTrigger
                value="concetto"
                className="py-3 text-lg data-[state=active]:bg-history-accent data-[state=active]:text-white"
              >
                Il Concetto
              </TabsTrigger>
              <TabsTrigger
                value="elementi"
                className="py-3 text-lg data-[state=active]:bg-history-accent data-[state=active]:text-white"
              >
                Elementi Chiave
              </TabsTrigger>
              <TabsTrigger
                value="innovazioni"
                className="py-3 text-lg data-[state=active]:bg-history-accent data-[state=active]:text-white"
              >
                Innovazioni Tattiche
              </TabsTrigger>
            </TabsList>

            <TabsContent value="concetto" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="section-subtitle">La "Guerra Lampo"</h3>
                  <p className="content-paragraph">
                    La Blitzkrieg (letteralmente "guerra lampo") rappresentava
                    un approccio rivoluzionario alla guerra moderna. Sviluppata
                    dai teorici militari tedeschi negli anni '30, questa
                    strategia mirava a ottenere vittorie rapide e decisive
                    tramite attacchi sorpresa ad alta velocità.
                  </p>
                  <p className="content-paragraph">
                    L'obiettivo era penetrare rapidamente nelle linee nemiche,
                    bypassando i centri di resistenza, per poi accerchiare e
                    isolare le forze nemiche. La velocità era essenziale per
                    impedire la riorganizzazione del nemico e la stabilizzazione
                    delle linee difensive.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/blitzkrieg-legacy-project/images/lampo.png"
                    alt="Rappresentazione della strategia tedesca"
                    className="historical-image max-w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="elementi" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <Sword className="w-8 h-8 text-history-accent mr-3" />
                    <h4 className="text-xl font-bold">
                      Divisioni Corazzate (Panzer)
                    </h4>
                  </div>
                  <p>
                    Concentrazione di carri armati in formazioni d'urto capaci
                    di penetrare le linee nemiche. Le divisioni Panzer
                    rappresentavano la punta di diamante dell'offensiva, dotate
                    di grande mobilità e potenza di fuoco.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-8 h-8 text-history-accent mr-3" />
                    <h4 className="text-xl font-bold">
                      Supporto Aereo Tattico
                    </h4>
                  </div>
                  <p>
                    La Luftwaffe era integrata nelle operazioni di terra,
                    fornendo supporto diretto alle forze di terra. Gli Stuka
                    (Junkers Ju 87), bombardieri in picchiata, erano
                    particolarmente efficaci nel distruggere difese nemiche e
                    seminare il panico.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <Map className="w-8 h-8 text-history-accent mr-3" />
                    <h4 className="text-xl font-bold">
                      Comunicazioni Avanzate
                    </h4>
                  </div>
                  <p>
                    Uso estensivo della radio per coordinare le operazioni. Ogni
                    carro armato tedesco era equipaggiato con radio, permettendo
                    comunicazioni rapide e azioni coordinate, un vantaggio
                    cruciale rispetto agli avversari.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <Flag className="w-8 h-8 text-history-accent mr-3" />
                    <h4 className="text-xl font-bold">
                      Iniziativa dei Comandanti
                    </h4>
                  </div>
                  <p>
                    Auftragstaktik (tattica della missione): i comandanti sul
                    campo avevano ampia libertà decisionale. Ricevevano
                    obiettivi generali piuttosto che ordini dettagliati,
                    permettendo flessibilità e adattamento rapido alle
                    situazioni in evoluzione.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="innovazioni" className="mt-6">
              <div className="max-w-3xl mx-auto">
                <h3 className="section-subtitle text-center mb-8">
                  Innovazioni Tattiche e Tecnologiche
                </h3>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-history-accent mb-3">
                      Guerra Combinata
                    </h4>
                    <p className="mb-4">
                      La Blitzkrieg integrava perfettamente fanteria, carri
                      armati e aviazione in operazioni coordinate. Questo
                      approccio combinato moltiplicava l'efficacia delle singole
                      armi.
                    </p>
                    <p>
                      I carri armati sfondavano le linee, l'aviazione
                      distruggeva le riserve e le infrastrutture, mentre la
                      fanteria motorizzata consolidava i guadagni territoriali e
                      gestiva i prigionieri.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-history-accent mb-3">
                      Mobilità e Velocità
                    </h4>
                    <p className="mb-4">
                      L'esercito tedesco era fortemente motorizzato, permettendo
                      rapidi spostamenti. Le divisioni corazzate potevano
                      avanzare di 50-60 km al giorno in condizioni favorevoli.
                    </p>
                    <p>
                      Questa mobilità permetteva di aggirare le posizioni
                      fortificate nemiche e di colpire obiettivi strategici
                      nelle retrovie, creando confusione e disorganizzazione.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-history-accent mb-3">
                      Shock Psicologico
                    </h4>
                    <p className="mb-4">
                      La Blitzkrieg era progettata per creare un collasso sia
                      militare che psicologico del nemico. L'avanzata rapida,
                      combinata con bombardamenti aerei e il rumore dei carri
                      armati, generava panico e paralisi decisionale.
                    </p>
                    <p>
                      L'effetto sorpresa era fondamentale: colpire con forza
                      schiacciante dove e quando il nemico meno se lo aspettava,
                      impedendo una risposta organizzata.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-16">
          <h3 className="section-subtitle text-center mb-10">
            Timeline delle Campagne Militari
          </h3>

          <div className="max-w-4xl mx-auto space-y-6">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="timeline-item animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-24 font-bold text-2xl text-history-accent">
                    {event.year}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                    <p className="mb-4">{event.description}</p>
                    <p className="font-medium text-history-accent">
                      {event.outcomes}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StrategiaSection
