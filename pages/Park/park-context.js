import React, {useState, createContext, useContext, useEffect} from 'react';
import useParkByID from '../../api/hooks/useParkByID';
import useFullParkData from '../../api/nps/getFullParkData';

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

  const [sections, setSections] = useState({});

  const [imgIndex, setImgIndex] = useState(0);
  return (
    <ParkContext.Provider
      value={{data, isSuccess, imgIndex, setImgIndex, sections, setSections}}
      {...props}
    />
  );
};

export {ParkProvider, usePark};
