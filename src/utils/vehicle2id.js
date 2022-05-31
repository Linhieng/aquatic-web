import { getAllVehicle } from '@/api/getAllVehicle'

export async function vehicle2id(vehicle) {
  const vehicleArr = await getAllVehicle()
  let id
  vehicleArr.forEach((item) => {
    if (item.vehicle === vehicle) id = item.id
  })
  console.log(vehicle,id)
  return id
}

