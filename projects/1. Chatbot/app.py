from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

import streamlit as st
import os
from dotenv import load_dotenv

# Load environment variables first
load_dotenv()

# Set environment variables with proper error handling
openai_api_key = os.getenv("OPENAI_API_KEY")
if openai_api_key:
    os.environ["OPENAI_API_KEY"] = openai_api_key

# Langsmith tracking
os.environ['LANGCHAIN_TRACING_V2'] = 'true'
langchain_api_key = os.getenv("LANGCHAIN_API_KEY")
if langchain_api_key:
    os.environ['LANGCHAIN_API_KEY'] = langchain_api_key

# prompt template
prompt = ChatPromptTemplate.from_messages([
    ('system', 'You are a helpful assistant please respond to the user query in a concise manner.'),
    ('user', 'Question:{question}'),
])

# Streamlit app
st.title("Simple Chatbot with LangChain and OpenAI")
input_text = st.text_input("Enter your question:")

# OpenAI LLm
llm = ChatOpenAI(model_name="gpt-3.5-turbo", temperature=0)
output_parser = StrOutputParser()
chain  = prompt | llm | output_parser

if input_text:
    st.write(chain.invoke({'question':input_text}))