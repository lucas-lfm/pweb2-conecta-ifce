import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/components/ui/accordion'

const faq = [
  {
    question: 'Quem pode participar do ConectaIFCE?',
    answer:
      'Todos os membros da comunidade IFCE: alunos, professores, técnicos administrativos e egressos. Basta ter',
  },
  {
    question: 'Como funciona a formação de grupos de estudo?',
    answer:
      'Você pode criar um grupo de estudo sobre qualquer tema, convidar membros e compartilhar materiais. Os grupos',
  },
  {
    question: 'Posso divulgar meu projeto de pesquisa?',
    answer:
      'Sim! A plataforma possui uma área dedicada para publicação de projetos de pesquisa, extensão e inovação.',
  },
  {
    question: 'A plataforma esta disponível em dispositivos móveis?',
    answer:
      'Sim, o ConectaIFCE é totalmente responsivo e funciona perfeitamente em smartphones, tablets e desktops.',
  },
  {
    question: 'Como funcionam as badges e conquistas?',
    answer:
      'As badges são reconhecimentos visuais do seu papel e conquistas na instituição. Existem badges para aluno, docente, egresso, pesquisador, entre outros. Conquistas são desbloqueadas conforme você participa da comunidade',
  },
]

function FaqSection() {
  return (
    <section className="bg-card py-20">
      <div className="container-main max-w-3xl">
        <div className="mx-auto text-center">
          <p className="text-primary uppercase text-sm font-semibold tracking-wide">
            FAQ
          </p>
          <h2 className=" mt-3 text-4xl font-bold text-balance text-foreground tracking-tight">
            Perguntas frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full mt-16">
          {faq.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="text-base font-medium text-foreground hover:text-primary hover:cursor-pointer">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FaqSection
