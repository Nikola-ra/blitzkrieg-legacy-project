
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

interface GalleryItem {
  id: number;
  thumbnail: string;
  image: string;
  title: string;
  description: string;
  year: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1576766125564-b95319d65ffc?auto=format&fit=crop&q=80&w=400&h=300",
    image: "https://images.unsplash.com/photo-1576766125564-b95319d65ffc?auto=format&fit=crop&q=80",
    title: "Tecnologia e Guerra",
    description: "La guerra lampo tedesca si basava sull'uso innovativo della tecnologia per ottenere il vantaggio sul campo di battaglia.",
    year: "1939-1941"
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?auto=format&fit=crop&q=80&w=400&h=300",
    image: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?auto=format&fit=crop&q=80",
    title: "Propaganda e Comunicazione",
    description: "La propaganda nazista celebrava i successi militari della Blitzkrieg, contribuendo al mito dell'invincibilità tedesca.",
    year: "1940"
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1580130401233-50d1df2d002e?auto=format&fit=crop&q=80&w=400&h=300",
    image: "https://images.unsplash.com/photo-1580130401233-50d1df2d002e?auto=format&fit=crop&q=80",
    title: "Conquista Territoriale",
    description: "Le campagne lampo permisero alla Germania di conquistare vasti territori in tempi brevissimi, cambiando la mappa dell'Europa.",
    year: "1939-1941"
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80&w=400&h=300",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80",
    title: "Impatto sulla Popolazione",
    description: "Le popolazioni civili dei paesi invasi subirono le conseguenze devastanti dell'avanzata tedesca.",
    year: "1940-1941"
  },
  {
    id: 5,
    thumbnail: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&q=80&w=400&h=300",
    image: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&q=80",
    title: "Cambio delle Strategie",
    description: "La Guerra Lampo rivoluzionò la dottrina militare, costringendo gli Alleati ad adattare le proprie strategie.",
    year: "1941-1942"
  },
  {
    id: 6,
    thumbnail: "https://images.unsplash.com/photo-1596210938177-64701643f85d?auto=format&fit=crop&q=80&w=400&h=300",
    image: "https://images.unsplash.com/photo-1596210938177-64701643f85d?auto=format&fit=crop&q=80",
    title: "Tecnologia Militare",
    description: "L'innovazione tecnologica fu un elemento chiave del successo della Blitzkrieg, con carri armati e aerei all'avanguardia.",
    year: "1939-1940"
  },
];

const MediaSection = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="media" className="historical-section bg-history-light">
      <div className="container mx-auto">
        <h2 className="section-title">Galleria Storica</h2>
        <Separator className="mx-auto w-24 h-1 bg-history-accent mb-12" />

        <p className="content-paragraph text-center mb-12">
          Esplora la galleria di immagini storiche che documentano la Guerra Lampo tedesca, le sue tattiche, i protagonisti e l'impatto sui territori conquistati.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div 
                  className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl"
                  onClick={() => setSelectedItem(item)}
                >
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.year}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{item.title}</DialogTitle>
                  <DialogDescription className="text-base text-gray-500">
                    {item.year}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full rounded-md mb-4"
                  />
                  <p className="text-lg">{item.description}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="section-subtitle text-center">Documenti Storici</h3>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md mt-8">
              <h4 className="text-xl font-bold text-history-accent mb-4">Estratto dal discorso di Hitler al Reichstag, 1 settembre 1939</h4>
              <blockquote className="quote-block">
                "Dalla mezzanotte in poi, risponderemo alla forza con la forza! [...] D'ora in poi, bomba sarà ripagata con bomba."
              </blockquote>
              <p className="mt-4">
                Con queste parole, Adolf Hitler annunciò l'inizio dell'invasione della Polonia e, di fatto, della Seconda Guerra Mondiale. Questo discorso segnò l'inizio ufficiale della prima campagna di Blitzkrieg.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-8">
              <h4 className="text-xl font-bold text-history-accent mb-4">Rapporto militare francese, maggio 1940</h4>
              <blockquote className="quote-block">
                "Le forze corazzate tedesche avanzano a una velocità impensabile... i nostri comandi non riescono a reagire abbastanza rapidamente agli spostamenti nemici."
              </blockquote>
              <p className="mt-4">
                Questo estratto da un rapporto militare francese evidenzia lo shock e la confusione causati dalla rapidità dell'avanzata tedesca durante la campagna di Francia, uno dei più eclatanti successi della tattica della Blitzkrieg.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
