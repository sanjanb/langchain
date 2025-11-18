from fastapi import FastAPI
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
from langserve import add_routes

import uvicorn
import os
from dotenv import load_dotenv
from langchain_community.llms import Ollama

load_dotenv()

os.environ['OPENAI_API_KEY'] = os.getenv("OPENAI_API_KEY", "")
# os.environ['LANGCHAIN_TRACING_V2'] = 'true'

app = FastAPI(
    title="Chatbot API with LangChain and FastAPI",
    description="An API to interact with a chatbot using LangChain and OpenAI or Ollama models.",
    version="1.0.0",
)

add_routes(
    app, 
    ChatOpenAI(),
    path='/openai'
)

model = ChatOpenAI(model_name="gpt-3.5-turbo", temperature=0)
ollama = Ollama(model="llama2", temperature=0)

prompt1 = ChatPromptTemplate.from_template(
    'brief about the {topic} in less than 100 words.'
)
prompt2 = ChatPromptTemplate.from_template(
    'You are a helpful assistant please respond to the user query in a concise manner.'
)

add_routes(
    app,
    prompt1 | model,
    path='/brief'
)

add_routes(
    app,
    prompt2 | model,
    path='/concise'
)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)