import React from 'react';
import { AnimatePresence, motion } from "framer-motion";


function VehicleImg({ 
  selectedVehicle,
  vehicle,
  className, 
  id, 
}) {
  const isSelected = selectedVehicle.id === vehicle.id;
  return (
    <AnimatePresence>
      {
        isSelected &&
        <motion.div
          className={id}
          initial={{ x: "15vw", opacity: 0 }}
          animate={{ x: "0vw", opacity: 1 }}
          exit={{ x: "-15vw", opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            className={className}
            id={id}
            src={vehicle.img}
            alt={`${vehicle.name} - ${vehicle.model}`}
          />
        </motion.div>
      }
    </AnimatePresence>
  );
}

export default VehicleImg;
