/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var res = 0;
  
	if (preferences.length < 3) {
  		return 0;
  	};
  	// ищем пары в массиве, записывая значения и их индексы в переменные f,s,t (first,second,third)
  	for (var i = 0; i < preferences.length; i++) {
  		var	f = preferences[i];  		
 		var s = preferences[f-1]; 		 
 		var t = preferences[s-1]; 		
 		var si = f - 1; // индексы второго и третьего элементов (индексом первого элемента считаем i)
 		var ti = s - 1; 		
 		if (f != s) { // проверка на одинаковые значения и индексы
 			if (t-1 === i && f-1 === si && s-1 === ti) { // проверка на "любовный треугольник"				
 				res++;
 				preferences[i] = 0; // очищаем значение, чтобы избежать повторяющихся пар	
 			} 
 		} 	 				
 	}
  return res;
};