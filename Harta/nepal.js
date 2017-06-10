var width = 1800, height = 800;

var divNode = d3.select('#map').node();

var projection = d3.geo.mercator()
	.scale(14200)
	.translate([width / 4, height / 4])
	.center([83.985593872070313, 28.465876770019531]);

var path = d3.geo.path().projection(projection);

var svg = d3.select("#map").append("svg").attr("width", width).attr("height", height);



d3.json("nepal-districts.txt", function(error, ok) {
	var counties = topojson.feature(ok, ok.objects.districts);

	
	
    d3.csv("district.csv",function(data){
        var valueByDecedati = {};
		var valueByRaniti={};
		var valueByDisparuti={};
		var valueByCladiriDistruse = {};
		var valueByDurata={};
		var valueByMagnitudine={};
		var valueByAdancime = {};
		var valueByPagubeMateriale={};
		var valueByNumarReplici={};
        data.forEach(function(d){
            valueByDecedati[d.district] = d.decedati; 	
			valueByRaniti[d.district]=d.raniti;
			valueByDisparuti[d.district] = d.disparuti; 
			valueByCladiriDistruse[d.district]=d.cladiriDistruse;
			valueByDurata[d.district] = d.durata; 
			valueByMagnitudine[d.district]=d.magnitudine;
			valueByAdancime[d.district] = d.adancime; 
			valueByPagubeMateriale[d.district]=d.pagubeMateriale;
			valueByNumarReplici[d.district] = d.numarReplici; 
			
        });
		
		
	//counties
    	svg.append("g")
            .attr("class", "county")
            .selectAll("path")
            .data(counties.features)
            .enter()
            .append("path")
            .attr("d", path)
			.attr("text-anchor","middle")
			.attr("opacity","1")
			.on("mousemove", function(d){
				if(valueByDecedati[d.properties.DISTRICT]!= undefined){
                       var absoluteMousePos = d3.mouse(divNode);
                       d3.select("#tooltip")
						   .style("left", absoluteMousePos[0]-40 + "px")
                           .style("top", absoluteMousePos[1]-160 + "px")
                           .select("#value")
                           .attr("class","font")
                           .html(function(){
							   return "<strong>"+"Detalii despre cutremurul din "+"<br>" + d.properties.DISTRICT +"</strong> " + "<br><br>" 
							   +"\u2022 Decedati: <strong>" + valueByDecedati[d.properties.DISTRICT] + "</strong> "	+ "<br>"
							   +"\u2022 Raniti: <strong>" + valueByRaniti[d.properties.DISTRICT] + "</strong>"+ "<br>"
							   +"\u2022 Disparuti: <strong>" + valueByDisparuti[d.properties.DISTRICT] + "</strong>"+ "<br>"
							   +"\u2022 Cladiri distruse: <strong>" + valueByCladiriDistruse[d.properties.DISTRICT] + "</strong>"+ "<br>"
							   +"\u2022 Durata: <strong>" + valueByDurata[d.properties.DISTRICT] + "</strong>"+ "<br>"
							   +"\u2022 Magnitudine: <strong>" + valueByMagnitudine[d.properties.DISTRICT] + "</strong>"+ "<br>"
							   +"\u2022 Adancime: <strong>" + valueByAdancime[d.properties.DISTRICT] + "</strong>"+ "<br>"
							   +"\u2022 Pagube materiale: <strong>" + valueByPagubeMateriale[d.properties.DISTRICT] + "</strong>"+ "<br>"
							   +"\u2022 Numar replici: <strong>" + valueByNumarReplici[d.properties.DISTRICT] + "</strong>"+ "<br>";
										});
                       d3.select("#tooltip").classed("hidden", false);
				}})
                   .on("mouseout",function(){
                       d3.select("#tooltip").classed("hidden", true);
                   })
            .style("fill", function(d) {
                if(valueByDecedati[d.properties.DISTRICT]<10){
                    return "#ffb2b2";
                }
				if(valueByDecedati[d.properties.DISTRICT]>9 && valueByDecedati[d.properties.DISTRICT]<101){
                    return "#ff7f7f";
                }
				if(valueByDecedati[d.properties.DISTRICT]>100 && valueByDecedati[d.properties.DISTRICT]<1001){
                    return "#ff4c4c";
                }
				if(valueByDecedati[d.properties.DISTRICT]>1000){
                    return "red";
                }
				
    		return "gainsboro";
    	});
		


        svg.selectAll("text")
		.data(counties.features)
		.enter()    
		.append("text")
		.attr("opacity","1")
		.attr("fill","black")
		.attr("font-weight","bold")
		.attr("text-anchor","middle")
		.attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
		.text(function (d) {
			if(valueByDecedati[d.properties.DISTRICT]!=undefined)
			return d.properties.DISTRICT; }); 

    	//county borders
    	svg.append("path").datum(topojson.mesh(ok, ok.objects.districts, function(a, b) {
    		return a !== b;
    	})).attr("class", "county-border").attr("d", path);
		

    });
	
});
