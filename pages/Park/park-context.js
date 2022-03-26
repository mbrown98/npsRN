import React, {useState, createContext, useContext, useEffect} from 'react';
import useParkByID from '../../api/hooks/useParkByID';

const ParkContext = createContext(undefined);

function usePark() {
  const context = useContext(ParkContext);

  if (!context) {
    throw new Error('Park context must be used within a park provider');
  }
  return context;
}

const ParkProvider = ({...props}) => {
  const {data, isLoading, isSuccess} = useParkByID(props.code);
  console.log('this is runnign');
  return <ParkContext.Provider value={{data, isSuccess}} {...props} />;
};

export {ParkProvider, usePark};
