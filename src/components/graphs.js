import React from 'react';
import {Pie} from 'react-chartjs-2';
import * as d3 from 'd3';

const Graphs = ({ info, stringss, type_of }) => {
    const array_labels = [];
    const values = [];
    const colors = [];
    const hover_colors = [];
    const sections=5;
    let smallest = info[0][stringss];
    let largest = info[info.length-1][stringss];
    let increment;

    if(type_of==="number"){
      for(let h=0; h<info.length; h++){
        if(info[h][stringss]<smallest){
          smallest = info[h][stringss];
        }
        if(info[h][stringss]>largest){
          largest = info[h][stringss];
        }
      }
      increment = (largest-smallest)/sections;
      for(let h=0; h<sections; h++){
        array_labels.push(smallest+(increment*(h+1)));
        values.push(0);
      }
      for(let h=0; h<info.length; h++){
        for(let i=0; i<array_labels.length; i++){
          if(info[h][stringss]<array_labels[i]){
            values[i]+=1;
            break;
          }
        }
      }
  }
  if(type_of==="string"){
    for(let i=0; i<info.length; i++){
        if(!(array_labels.includes(info[i][stringss]))){
            array_labels.push(info[i][stringss]);
            values.push(0);
        }
        if(array_labels.includes(info[i][stringss])){
            values[array_labels.indexOf(info[i][stringss])] += 1;
        }
    }
  }    
    for(let j=0; j<array_labels.length; j++){
        colors.push((d3.interpolateRgb("#eaaf79", "#bc3358"))(j/(array_labels.length-1)));
        hover_colors.push((d3.interpolateRgb("#a87c56", "#6e1e33"))(j/(array_labels.length-1)));
    }
    const state = {
        labels: array_labels,
        datasets: [
            {
            label: 'All_Graphs',
            backgroundColor: colors,
            hoverBackgroundColor: hover_colors,
            data: values
            }
        ]
    }
		
     return (
        <div>
          <Pie
            data={state}
            options={{
              title:{
                display:true,
                text:`${stringss} pie chart`,
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div>
     );
}

export default Graphs;