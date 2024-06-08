/* eslint-disable @typescript-eslint/no-unused-vars */
import SingleResponsibilityPrinciple from './SingleResponsibilityPrinciple/index';
// import OpenClosedPrinciple, { TitleWithLink, TitleWithNormalButton } from './OpenClosedPrinciple/index';
// import { RedButton } from './LiskovSubstitutionPrinciple';
// import Post from './InterfaceSegregationPrinciple';
// import Todo from './DependencyInversionPrinciple';

function App() {

  return (
    <>
      <SingleResponsibilityPrinciple />

      {/* <OpenClosedPrinciple title="Principios Solid con React" type="withNormalButton" buttonText="Aloha" href="/" /> */}
      {/* <TitleWithLink title='Link, Papá' buttonText='LINK' href='/' /> */}
      {/* <TitleWithNormalButton title='Button, Papá' buttonText='BOTÓN' onClick={() => console.log('hola')} /> */}
      
      {/* <RedButton size='xl'>Holo</RedButton> */}

      {/* <Post post={{
        title: 'El Señor de los Anillos',
        author: {name: 'J. R. R. TOLKIEN', age: 80},
        createdAt: new Date('1945/7/3')
      }} /> */}

      {/* <Todo /> */}
    </>
  )
}

export default App
