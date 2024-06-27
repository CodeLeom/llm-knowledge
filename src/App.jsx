/* eslint-disable react/no-unescaped-entities */
import Card from "./components/Card"

function App() {
  const cards = [
    {
      title: 'What are LLMs?',
      description: 'Learn what language models are and how they work.'
    },
    {
      title: 'Evolution of LLMs',
      description: 'Discover how language models have evolved since the 1950s.'
    },
    {
      title: 'Business Uses of LLMs',
      description: 'Explore the specific business uses and benefits of LLMs.'
    },
    {
      title: 'Data Foundation for LLMs',
      description: 'Understand how to establish the right data foundation for success with LLMs.'
    }
  ];
  return (
    <>
      <div className="app">
      <header>
        <h1>Learn about Large Language Models (LLMs)</h1>
      </header>
      <p className="desc">Welcome here 🤗, this webpage is created for the purpose of learning about Large Language Models.
        A chatbot is already trained to answer all your questions about LLM and it's evolution since 1950. 
        Click the message icon at the bottom right of this webpage, type your question and it will be answered.
      </p>

      <h2 style={{marginBottom: "20px"}}>The chat bot is trained with the following Informations:</h2>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
    </>
  )
}

export default App
