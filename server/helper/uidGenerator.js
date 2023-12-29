function uidGenerator(userId) {
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString().substr(-2); 
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
    const randomDigits = Math.floor(Math.random() * 1000).toString().padStart(3, '0'); 
  

    const generatedUID = `${year}${randomDigits}${month}${userId.toString().padStart(2, '0')}`;
    
    return generatedUID;
  }


module.exports = { uidGenerator }