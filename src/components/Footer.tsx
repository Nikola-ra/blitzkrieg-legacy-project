import { Separator } from "@/components/ui/separator"
import { Book } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-history-dark text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">La Guerra Lampo</h3>
            <p className="text-history-muted">
              Un progetto storico dedicato all'analisi della strategia militare
              tedesca durante la Seconda Guerra Mondiale.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              Riferimenti Bibliografici
            </h3>
            <ul className="space-y-2 text-history-muted">
              <li className="flex items-start">
                <Book className="h-5 w-5 mr-2 text-history-accent flex-shrink-0 mt-1" />
                <span>
                  Frieser, Karl-Heinz. "The Blitzkrieg Legend: The 1940 Campaign
                  in the West"
                </span>
              </li>
              <li className="flex items-start">
                <Book className="h-5 w-5 mr-2 text-history-accent flex-shrink-0 mt-1" />
                <span>Guderian, Heinz. "Panzer Leader"</span>
              </li>
              <li className="flex items-start">
                <Book className="h-5 w-5 mr-2 text-history-accent flex-shrink-0 mt-1" />
                <span>
                  Shirer, William L. "The Rise and Fall of the Third Reich"
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Risorse Aggiuntive</h3>
            <ul className="space-y-2 text-history-muted">
              <li>
                <a
                  href="https://www.iwm.org.uk/history/second-world-war"
                  className="hover:text-history-accent transition-colors"
                >
                  Imperial War Museums - WWII Collection
                </a>
              </li>
              <li>
                <a
                  href="https://www.bundesarchiv.de/en/federal-archives/"
                  className="hover:text-history-accent transition-colors"
                >
                  Bundesarchiv - German Federal Archives
                </a>
              </li>
              <li>
                <a
                  href="https://www.nationalww2museum.org/"
                  className="hover:text-history-accent transition-colors"
                >
                  The National WWII Museum
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-history-muted/30" />

        <div className="text-center text-history-muted text-sm">
          <p>
            Questo sito ha finalità esclusivamente educative e storiche. Non
            intende in alcun modo glorificare o promuovere l'ideologia nazista o
            altre ideologie totalitarie.
          </p>
          <p className="mt-4">© 2025 - Progetto Storico sulla Blitzkrieg</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
