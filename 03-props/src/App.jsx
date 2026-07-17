import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
        <Card user='Abhijeet' img='https://images.unsplash.com/photo-1783886156311-e0c4424aa77f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D'/>
        <Card user='Rahul' img='https://images.unsplash.com/photo-1777041916709-d7fff7ddb91d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8'/>
        <Card user='Tejas' img='https://images.unsplash.com/photo-1783373315953-d975477da899?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App