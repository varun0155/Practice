import React from "react";

class Form extends React.Component{
  
  InputFields =[
    {
      id:"name",
      type:"text",
      name:"name",
      lable:"name",
    },
    {
      id:"email",
      type:"email",
      name:"email",
      lable:"email",
    },
    {
      id:"password",
      type:"password",
      name:"password",
      lable:"password",
    },
    {
      id:"submit",
      type:"submit",
      name:"submit",
      lable:"submit",
    }
  ]

  render (){
    return <form>
      {this.InputFields.map((field) => <>
      <label htmlFor={field.lable}>{field.lable}</label>
      <input id ={field.id} type={field.type}/>
      </>)}
    </form>
  }
}

export default Form;