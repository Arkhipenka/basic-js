module.exports = function createDreamTeam(members) {

    let names = [];

    if (!Array.isArray(members)){
        return false;
    } 

    members.forEach(item => {
        
        if (typeof item !== 'string'){
        	return false;
        } 
        
        let itemTrimmed = item.trim();
        
        let itemUpperCase = itemTrimmed[0].toUpperCase();
        
        name.push(itemUpperCase);
    });

    name.sort();
    let result = name.join('');
    return result;
};