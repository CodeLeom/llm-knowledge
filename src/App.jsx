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
    },
    {
      title: 'Building GenAI applications',
      description: 'Understand how to build a retrieval augmented generation (RAG) application, how to train and fine-tune a foundation model Evaluation and monitoring of LLMs to ensure integrity and reliability of the AI application'
    },
    {
      title: 'Machine Learning Use Cases',
      description: 'Get everything you need — use cases, code samples and notebooks — so you can start putting your knowldge to work today.'
    },
    {
      title: 'Master MLOps fundamentals',
      description: 'As machine learning has matured over time, so have the methods by which companies apply it at scale. You can ask the chatbot more on this topic'
    },
  ];
  return (
    <>
      <div className="app">
      <header>
        <h1>Learn about Large Language Models (LLMs)</h1>
      </header>
      <p className="desc">Welcome here 🤗, this webpage is created for the purpose of learning about Large Language Models.
        A multiple chatbots is already trained to answer all your questions about LLM, ML Ops, ML use cases, and building a GenAI application. All the chatbots are integrated into one single channel to answer these questions powered by <a href="https://console.autogon.ai/genesis" target="_blank">Autogon Genesis.</a> <br /> <br />Click the message icon at the bottom right of this webpage, type your question and it will be answered.
      </p>

      <h2 style={{marginBottom: "20px"}}>The chat bot is trained with the following Informations based on different e-books gotten from Databricks:</h2>
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
