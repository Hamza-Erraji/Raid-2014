
		function defiler_avant() {
		chaine='#pic';	
		prec=chaine.concat(c);

		if(c=='1111111111') c='';
		
		//c = c.slice(0, -1)
		c=c+'1',
		suiv=chaine.concat(c),
		$(suiv).animate({
		opacity: 1.0,
		top: '+=10',
		width:'30%',	
		height:'60%',
		
		}, 1000, function() {
		// Animation complete.
		});
		$(prec).animate({
		opacity: 0.4,
		top: '-=10',
		width:'6%',	
		height:'14%',
		
		}, 1000, function() {
		// Animation complete.
		});
		};
	
		setInterval(defiler_avant, 3000); 


		

