/* eslint-disable @typescript-eslint/no-unused-vars */
import { component$, QwikDragEvent, useSignal } from '@builder.io/qwik';



export const Drag_drop = component$(() => {
  const array = [
    'The',
    'early',
    'bird',
    'gets',
    'the',
    'worm',
    '.',
  ];
  
  const runCallback = (cb) => {
    return cb();
  };
  // const count = useSignal(0);
  return (
    <div style="display:flex;gap:5px;" >
      
      {runCallback(()=>{
        const row=[];
        for(let i=0;i<array.length;i++){
          row.push(
            <span  draggable onDragEnd$={(event)=> {
              event.dataTransfer.effectAllowed = 'all';
              // event.dataTransfer.clearData();
              console.log('before', event.dataTransfer);
              
              event.dataTransfer.setData('text/plain','test string');
              console.log('after',event.dataTransfer);
              // event.dataTransfer.items.add('test string');
              // event.dataTransfer.types.push('text/plain');

              // console.info('data transfer',event.dataTransfer);
            }
          } 
          preventdefault:dragover 
          preventdefault:drop
          
          onDrop$={(event) => {
            console.log('on drop', 'data transfer',event.dataTransfer);
            if(!event.dataTransfer){
              return;
            }
            const id = event
            .dataTransfer
            .getData('text/plain');
            console.log('data', id);

            // const data = ev.dataTransfer.getData("text/plain");
            // console.log('data',"'",data,"'");
            // console.log('-------------------');
            // if(data) {
            //   const info = JSON.parse(data);
            //   console.log('info',info);
            //   // console.log('data', ev.target.textContent, i);
            // }
            
            
          }}
          onDragOver$={(ev)=>{
            if(!ev.dataTransfer) {
              return;
            }
            ev.dataTransfer.effectAllowed = 'move';
            // ev.dataTransfer.dropEffect = 'move';
          }}
          
          style="border: 1px solid gray; padding:1rem;font-size:3rem;border-radius:1rem; cursor:pointer;">{array[i]}</span>
          );
        }
        return row;
      })}
      
    </div>
  );
});