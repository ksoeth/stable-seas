var internationalCooperationData = {
  metadata: {
    version: '1.0.0', // Independent data source for each page
    name: '*International Cooperation*',
    index: 2,
    code: 'internationalCooperation',
    path: 'international-cooperation',
    countryData: {},
    csv: '../../data/international-cooperation/internationalCooperation.csv',
    color: '#3CB2C1',
    order: -1,
    description: 'Maritime instability in African waters cause ripples that undermine global economies, international security, and strong social networks.'
  },
  load: function(csv, callback) {
    loadIAcsv(csv, callback);
  },
  cards: [
    { // Card 0
      title: 'International Cooperation',
      menu: 'International Cooperation',
      metadata: {
        owner: 'Curtis Bell',
        description: 'Introduce the issue.'
      },
      map: {
        scale: [],
        classes: 'card-eez-layer',
        translate: [],
        highlights: [],
        tooltip: true,
        tooltipHTML: function (iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso].index;
          tooltipVal = (tooltipVal * 100).toFixed(2);
          return "International Cooperation:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) { // ### *** This only should be for the first card ...
          // Class EEZ with card-0-layer to enable switch() method
          var layer = 'card-' + index + '-layer';
          d3.select('.card-eez-layer')
            .classed(layer, true);
        },
        switch: function(index) {
          // Choropleth of scores
          choropleth(index, 1, 'index');
        }
      },
      els: [{
          tag: 'h1',
          text: 'International Cooperation',
        },
        {
          tag: 'caption',
          text: 'Transnational challenges demand multilateral efforts'
        },
        // {
        //   tag: 'legend',
        //   text: 'Map Legend',
        //   legendContent: '<em>Highlighted countries are party to all parts of UNCLOS, including Part XI.'
        // },
        {
          tag: 'p',
          html: 'The security and governance of African waters is not an interest exclusive to African nations. Maritime instability causes economic, security, and social problems with effects that ripple across the globe. Acknowledging this interdependency, a variety of international actors—from individual states to global institutions—have facilitated programs which aim to build a more secure African maritime domain.'
        },
        {
          tag: 'h3',
          text: 'UNCLOS in Africa',
        },
        // { tag: 'caption',
        //   text: 'Enhanced sovereignty over maritime resources'
        // },
        //  { tag: 'legend',
        //     text: 'Map Legend',
        //    legendContent: '<em></em>.'
        //    },
        {
          tag: 'p',
          html: 'The United Nations Convention on the Law of the Sea (UNCLOS) codified the growing preference among countries to have increased legal rights to govern larger maritime spaces, reducing conflict over competing claims to offshore resources.'
        },
        {
          tag: 'img',
          src: '../../assets/international-cooperation/maritime_zones_eez.png', // ### need image path and in assets/international-cooperation/
          alt: 'The legal definition definition of \'exclusive economic zone\' was established under UNCLOS.',
          caption: 'The legal definition definition of \'exclusive economic zone\' was established under UNCLOS.'
        },
        {
          tag: 'p',
          html: 'This historic advance in maritime governance was actively shaped and supported by African nations. African states were especially strong advocates for UNCLOS III and the establishment of Exclusive Economic Zones (EEZs), which grant states the right to govern space and resources up to 200 nautical miles from their shores. African support allowed this concept to be adopted into international law<sup>1</sup> despite the concerns of many developed nations that had become accustomed to having unfettered access to resources off the coasts of developing nations.'
        },
        {
          tag: 'p',
          html: 'The main ramification of UNCLOS for sub-Saharan Africa was economic. Suddenly, African nations had a legal framework within which they could assert their rights to govern and share in the profits of the resources off of their shores. Potential financial gains for African states from the taxation of maritime resources continue to be massive, but equally significant is the assertion of sovereignty to govern these resources in a manner which protects the long-term economic, environmental, and security interests of their people.'
        },
        {
          tag: 'p',
          html: 'Protecting the rights of African maritime states under UNCLOS needs to be a priority for all actors interested in maintaining maritime security. The case of Somali piracy demonstrates how failure to observe the rights to maritime governance established in UNCLOS III can generate grievances<sup>2</sup> which give rise to other threats. Rather than exploiting the inability of many sub-Saharan states to effectively enforce their sovereignty in their maritime domains, actors interested in maritime security need to partner with such states in order to build capacity to govern and enforce law in these spaces.'
        },
        {
          tag: 'links',
          items: [{
              org: '<sup>1</sup> “Reflections on Africa and the Law of the Sea Regime,” <em>CEMLAWS Blog</em>, 24 November 2016,',
              url: 'http://www.cemlawsafrica.com/blog/reflections-africa-and-law-sea-regime-part-i'
            },
            {
              org: '<sup>2</sup> Peter Kerins, “Somali Perspectives on Piracy and Illegal Fishing,” Oceans Beyond Piracy,',
              url: 'http://oceansbeyondpiracy.org/publications/somali-perspectives-piracy-and-illegal-fishing'
            }
          ]
        }
        // { tag: 'h3',
        //   text: 'The International Cooperation Score'
        // },
        // {tag: 'indexTable'
        // },
        // { tag: 'caption',
        //   text: 'Note: scores are rounded to the nearest whole number.'
        // },
        // { tag: 'p',
        //    html: 'Unlike other scores in this index, an International Cooperation Score can be greatly improved without vast material capabilities. The lowest-scoring states are among the few abstainers to important international maritime legal agreements, such as the UN Fish Stocks Agreement and the Convention for the Suppression of Unlawful Acts against the Safety of Maritime Navigation. More states signing, ratifying, and complying with these kinds of agreements would boost global and regional efforts to improve African maritime governance.'
        // },
      ] // end of els array
    }, // End of first element of cards object
    { // Card 1
      title: 'The UN Convention on the Law of the Sea and Sub-Saharan Africa',
      menu: 'UNCLOS in Africa',
      metadata: {
        owner: 'Jay Benson',
        description: 'Discusses how the UN Law of the Sea influences maritime security in sub-Saharan Africa'
      },
      map: {
        scale: [],
        classes: 'card-eez-layer',
        translate: [],
        highlights: [],
        tooltip: true,
        tooltipHTML: function (iso) {
          var output = "";

          var vals = issueAreaData[issueArea].metadata.countryData;
        //  console.log(iso,vals[iso]);

          if (vals[iso].unclos == 1) {
            output += "UNCLOS: Signed<br>";
          } else {
            output += "UNCLOS: Not signed<br>";
          }

          if (vals[iso].partXI == 1) {
            output += "Part XI: Signed<br>";
          } else {
            output += "Part XI: Not signed<br>";
          }

          if (vals[iso]["un-fish-stocks"] == 1) {
            output += "Fish Stocks: Signed";
          } else {
            output += "Fish Stocks: Not signed";
          }
      //    console.log(output);
          return output;

        },
        load: function (index, csv) {  // ### *** This only should be for the first card ...
          // Class EEZ with card-0-layer to enable switch() method
          var layer = 'card-'+index+'-layer';
          d3.select('.card-eez-layer')
            .classed(layer, true);
        },
        switch: function (index) {
          var vals = issueAreaData[issueArea].metadata.countryData;
          var cat;
          var i = 0;
          for (iso in vals) {
            var unclos = vals[iso].unclos == 1 ? true : false,
              partXI = vals[iso].partXI == 1 ? true : false,
              fishStocks = vals[iso]["un-fish-stocks"] == 1 ? true : false;

            if (unclos && partXI && fishStocks) {
              cat = 0;
            } else if (unclos && partXI && !fishStocks) {
              cat = 1;
            } else if (unclos && !partXI && !fishStocks) {
              cat = 2;
            } else if (unclos && !partXI && fishStocks) {
              cat = 4;
            } else {
              cat = 3;
            }

            d3.selectAll('.country.' + iso)
              .classed('active', true)
              .transition().delay(10 * i)
              .style('fill', function () {
                return colorBrew[cat][1];
              });

            d3.selectAll('.eez.' + iso)
              .classed('active', true)
              .transition().delay(10 * i)
              .style('fill', function () {
                return colorBrew[cat][0];
              });
            i++;
          }

        }
      },
      els: [
        { tag: 'h1',
          text: 'UNCLOS in Sub-Saharan Africa',
        },
        { tag: 'caption',
          text: 'The Law of the Sea in African waters'
        },
        // { tag: 'legend',
        //   text: 'Map Legend',
        //   legendContent: '<em></em>.'
        // },
        { tag: 'p',
          html: 'Prior to the adoption of the United Nations Convention on the Law of the Sea (UNCLOS) in 1982, the maritime space beyond a narrow strip of coastal waters was governed not by law, but by those who had the most maritime technology and power. UNCLOS codified the growing preference among countries to have increased legal rights to govern larger maritime spaces, reducing conflict over competing claims to offshore resources.'
        },
        { tag: 'p',
           html: 'This historic advance in maritime governance was actively shaped and supported by African nations. African states were especially strong advocates for UNCLOS III and the establishment of Exclusive Economic Zones (EEZs), which grant states the right to govern space and resources up to 200 nautical miles from their shores. This expansion greatly benefited developing states that had limited capacity to exploit offshore hydrocarbons and fisheries. African support allowed this concept to be adopted into international law<sup>1</sup> despite the concerns of many developed nations that had become accustomed to having unfettered access to resources off the coasts of developing nations.'
        },
        { tag: 'p',
           html: 'The main ramification of UNCLOS for sub-Saharan Africa was economic. Suddenly, African nations had a legal framework within which they could assert their rights to govern and share in the profits of the resources off of their shores. Potential financial gains for African states from the taxation of maritime resources continue to be massive, but equally significant is the assertion of sovereignty to govern these resources in a manner which protects the long-term economic, environmental, and security interests of their people.'
        },
        { tag: 'p',
           html: 'Protecting the rights of African maritime states under UNCLOS needs to be a priority for all actors interested in maintaining maritime security. The case of Somali piracy demonstrates how failure to observe the rights to maritime governance established in UNCLOS III can generate grievances<sup>2</sup> which give rise to other threats. Rather than exploiting the inability of many sub-Saharan states to effectively enforce their sovereignty in their maritime domains, actors interested in maritime security need to partner with such states in order to build capacity to govern and enforce law in these spaces.'
        },
        { tag: 'p',
           html: 'Regional support for UNCLOS remains to this day, with every maritime nation in sub-Saharan Africa having signed and ratified UNCLOS III, though a few have not yet signed on to the subsequent Part XI and UN Fish Stocks Agreement.'
        },
        { tag: 'links',
          items: [
          {org: '<sup>1</sup> “Reflections on Africa and the Law of the Sea Regime,” <em>CEMLAWS Blog</em>, 24 November 2016,', url: 'http://www.cemlawsafrica.com/blog/reflections-africa-and-law-sea-regime-part-i'},
          {org: '<sup>2</sup> Peter Kerins, “Somali Perspectives on Piracy and Illegal Fishing,” Oceans Beyond Piracy,', url: 'http://oceansbeyondpiracy.org/publications/somali-perspectives-piracy-and-illegal-fishing'},
          ]
        },
        //###Insert graphics, video, and blockquote
      ] // end of els array
    },
    { // Card 2
      title: 'Ongoing Disputes',
      menu: 'Ongoing Disputes',
      metadata: {
        owner: 'Jay Benson',
        description: 'Highlight maritime disputes.'
      },
      map: {
        scale: [],
        classes: 'card-eez-layer',
        path: '../../data/international-cooperation/maritime-border-disputes.csv',
        translate: [],
        tooltip: true,
        tooltipHTML: function (iso) {

        },
        load: function(index, csv) { // ### *** This only should be for the first card ...
          // Class EEZ with card-0-layer to enable switch() method


          var layer = 'card-' + index + '-layer';

          d3.csv(csv, function(rows) {
            rows.forEach(function(d) {
              d.lat = +d.lat;
              d.lon = +d.lon;
            });

            var disputes = mapg.append('g')
              .classed('card-layer maritime-disputes invisible ' + layer, true);

            disputes.selectAll('rect')
              .data(rows).enter()
              .append('rect')
              .attr('x', function(d) {
                return projection([d.lon, d.lat])[0] - 16;
              })
              .attr('y', function(d) {
                return projection([d.lon, d.lat])[1] - 15;
              })
              .attr('width', '30px')
              .attr('height', '30px')
              .style('fill', function (d, i) {
                return d3.interpolateLab('white', rampColor(i / (rows.length)))(0.5);
              } )
              .classed('maritime-dispute', true);


              disputes.selectAll('text')
                .data(rows).enter()
                .append('text')
                .attr('x', function (d, i) {
                //  console.log('lat', d.lat, 'lon', d.lon);

                  if (i < 9) {
                    return projection([d.lon, d.lat])[0] - 7;
                  } else {
                    return projection([d.lon, d.lat])[0] - 12;
                  }
                })
                .attr('y', function (d) {
                  return projection([d.lon, d.lat])[1] + 7;
                })
                .attr('font-size', '20px')
                .classed('maritime-disputes-label', true)
                .style('fill', function (d, i) {
                  return d3.interpolateLab('white', rampColor(i / (rows.length)))(1);
                } )
                .text(function (d, i) {return i + 1;});

          });

          d3.select('.card-eez-layer')
            .classed(layer, true);

        },
        switch: function(index) {
          var countries = ['SOM', 'GHA', 'CIV', 'AGO', 'KEN', 'GAB', 'GNQ', 'COD', 'COG', 'YEM', 'DJI', 'MUS', 'GBR', 'FRA', 'MDG', 'ATF', 'COM', 'MYT'];

          countries.forEach(function(country, i) {
            d3.selectAll('.country.' + country)
              .classed('active', true)
              .transition().delay(i * 10)
              .style('fill', themeColor(0.5))
              .style('stroke', 'grey');
          })

        }
      },
      els: [{
          tag: 'h1',
          text: 'Ongoing Disputes',
        },
        {
          tag: 'caption',
          text: 'Disputes undermine maritime security, governance, and the Blue Economy'
        },
        // {
        //   tag: 'legend',
        //   text: 'Map Legend',
        //   legendContent: '<em>Red boxes outline areas of maritime border disputes.<br />Highlighted countries are involved in these disputes.</em>'
        // },
        {
          tag: 'p',
          html: 'International legal developments including UNCLOS have reduced the potential for conflict by establishing common definitions and guidelines pertaining to maritime claims and resources. This work has provided states with many non-violent methods for overcoming contested claims and most African states have entered formal agreements with their neighbors that establish mutually recognized maritime borders.'
        },
        {
          tag: 'img',
          src: '../../assets/international-cooperation/Jubilee_Oil_Field_of_the_Ghana_National_Petroleum_Corporation_GNPC_and_National_Petroleum_Authority.png', // This should be on the Stable Seas Deck - comments
          alt: 'The Jubilee Oil field straddles the contested boundary between Cote d\'Ivoire and Ghana.',
          caption: 'The Jubilee Oil field straddles the contested boundary between Cote d\'Ivoire and Ghana.'
        },

        {
          tag: 'p',
          html: 'The multifaceted drivers of the region\'s ongoing disputes are typified by the disagreement over the maritime boundary between Ghana and Côte d’Ivoire.<sup>3</sup> The border between these former British and French colonies was never fully demarcated, laying the groundwork for the dispute, but what had previously been a low-profile issue took on new significance after the discovery of the massive Jubilee <a class="blue-economy inline" href="../../blue-economy#6">oil and gas field</a> which straddles the contested border. Both sides have since granted competing operating licenses to international oil companies.'
        },
        {
          tag: 'p',
          html: 'These disputes have not become militarized, but they pose a problem for governance and security in African waters in two ways. First, unresolved maritime boundaries hamper regional security by encouraging states to look at maritime security from the perspective of national defense as opposed to that of <a class="maritime-enforcement inline" href="../../maritime-enforcement#3">law enforcement</a>, which is better suited to the security threats faced in African waters. In addition, non-demarcated maritime boundaries mean states cannot fully develop their <a class="blue-economy inline" href="../../blue-economy">Blue Economy</a>, including industries such as <a class="fisheries inline" href="../../fisheries">fisheries</a>, <a class="blue-economy inline" href="../../blue-economy#6">hydrocarbon</a>, <a class="blue-economy inline" href="../../blue-economy#2">tourism</a>, and <a class="blue-economy inline" href="../../blue-economy#3">shipping</a>.'
        },
        {
          tag: 'p',
          html: 'The region primarily uses two models for maritime dispute resolution. The first relies on international legal institutions to resolve disputes. This is the model used in the aforementioned case of Ghana and Côte d’Ivoire, which is at the international Tribunal on the Law of the Sea, as well as the case of Kenya and Somalia, whose dispute is on trial at the International Court of Justice.<sup>4</sup> Alternatively, some states have chosen to shelve issues of sovereignty and establish frameworks and institutions for joint development and governance of maritime industries in the disputed areas. As both the <a class="international-cooperation inline internal-ref" data-link="6">African Union</a> and <a class="international-cooperation inline internal-ref" data-link="3">sub-regional organizations</a> turn their attention to governance of the maritime space, there may be room for both to further develop frameworks for maritime dispute resolution which facilitate cooperative economic development and security.'
        },
        {
          tag: 'links',
          items: [{
              org: '<sup>3</sup> Barthélemy Blédé and André Diouf, “The First Verdict in the Ghana-Côte d’Ivoire Maritime Border Dispute Will be Delivered Tomorrow,” Institute for Security Studies, 24 April 2015,',
              url: 'https://issafrica.org/iss-today/gulf-of-guinea-who-will-win-the-oil-battle'
            },
            {
              org: '<sup>4</sup> David Mwere, “Kenya-Somalia Maritime Boundary Dispute Proceeds to Full Trail, ICJ Rules,” The Star, 2 February 2017,',
              url: 'https://www.the-star.co.ke/news/2017/02/02/kenya-somalia-maritime-boundary-dispute-proceeds-to-full-trial-icj_c1499658'
            },
          ]
        },
        //###Insert image and Video for card
      ] // end of els array
    },
    { // Card 3
      title: 'International Fishing Agreements',
      menu: 'International Fishing Agreements',
      metadata: {
        owner: 'Kelsey Soeth',
        description: 'Map will talk about international cooperation around fishing.'
      },
      map: {
        scale: [],
        classes: 'card-eez-layer',
        translate: [],
        highlights: [],
        tooltip: true,
        tooltipHTML: function (iso) {
          var output = "";
          // ### come back to this!

          var countryData = issueAreaData[issueArea].metadata.countryData[iso];

          var portStateMeasuresRatified = countryData["port-state-measures-ratified"];
          var fishStocksRatified = countryData["un-fish-stocks-ratified"];

          if (portStateMeasuresRatified == 1 && fishStocksRatified == 1) {
            output = "Port States: Ratified <br />" +
              "Fish Stocks: Ratified";
          } else if (portStateMeasuresRatified == 0 && fishStocksRatified == 1) {
            output = "Port States: Not Ratified <br />" +
              "Fish Stocks: Ratified";
          } else if (portStateMeasuresRatified == 1 && fishStocksRatified == 0) {
            output = "Port States: Ratified <br />" +
              "Fish Stocks: Not Ratified";
          } else if (portStateMeasuresRatified == 0 && fishStocksRatified == 0) {
          output = "Port States: Not Ratified <br />" +
            "Fish Stocks: Not Ratified";
          }

          return output;
        },
        load: function(index, csv) { // ### *** This only should be for the first card ...

          var layer = 'card-' + index + '-layer';
          d3.select('.card-eez-layer')
            .classed(layer, true);

        },
        switch: function(index) {
          var fishing = issueAreaData[issueArea].metadata.countryData;
          var i = 0;
          for (iso3 in fishing) {
            var portStateMeasuresRatified = fishing[iso3]["port-state-measures-ratified"];
            var fishStocksRatified = fishing[iso3]["un-fish-stocks-ratified"];
            var strokeColor, fillColor;

            if (portStateMeasuresRatified == 1 && fishStocksRatified == 1) {
              strokeColor = colorBrew[4][1];
              fillColor = colorBrew[4][0];
            } else if (portStateMeasuresRatified == 0 && fishStocksRatified == 1) {
              strokeColor = colorBrew[0][1];
              fillColor = colorBrew[0][0];
            } else if (portStateMeasuresRatified == 1 && fishStocksRatified == 0) {
              f = 'portStateMeasures';
              strokeColor = colorBrew[2][1];
              fillColor = colorBrew[2][0];
            } else if (portStateMeasuresRatified == 0 && fishStocksRatified == 0) {
              f = 'neither';
              strokeColor = null;
              fillColor = null;
            } else {
              strokeColor = null;
              fillColor = null;
            }

            d3.selectAll('.country.' + iso3)
              .classed('active', true)
              .transition()
              .delay(i * 10)
              .style('fill', fillColor) // ### what colors??
              .style('stroke', strokeColor);

            d3.selectAll('.eez.' + iso3)
              .classed('active', true)
              .transition()
              .delay(i * 10)
              .style('stroke', strokeColor); // ### what colors?? Also EEZ opacity is meh ...
            i++;
          }
        }
      },
      els: [{
          tag: 'h1',
          text: 'International Fishing Agreements',
        },
        {
          tag: 'caption',
          text: 'Sustainable management through regional cooperation'
        },
        // {
        //   tag: 'legend',
        //   text: 'Map Legend',
        //   legendContent: '<div class="brew-00 legend-entries light">Ratified UN Fish Stocks Agreement</div><br /><div class="brew-20 legend-entries light">Ratified Port State Measures Agreement</div><br /><div class="brew-40 legend-entries light">Ratified both</div><br />'
        // },
        //###Kelsey would like a map of different RFMOs in SSA. She has sent a file with the corresponding data to John.
        {
          tag: 'p',
          html: 'According to the UN Food and Agriculture Organization, the value of marine fisheries in Africa exceeds $15 billion.<sup>5</sup> The efficient management of these resources is imperative to the continued growth of sub-Saharan African economies as well as to long-term food security.'
        },

        {
          tag: 'p',
          html: 'However, fisheries management cannot be regulated by sovereign states alone. Many fish species are highly migratory, and marine fisheries on the high seas are subject to international, not sovereign, jurisdiction. International cooperation by coastal states and fishing nations is therefore necessary to conserve and promote the sustainable use of fish stocks and other marine resources. Since the late 1960s, this cooperation has often taken the form of regional fisheries management organizations (RFMOs) in sub-Saharan Africa.'
        },
        {
          tag: 'bigtext',
          html: 'RMFO: Regional Fisheries Management Organization'
        },
        {
          tag: 'p',
          html: 'RFMOs are international organizations dedicated to the sustainable management of fishery resources in a particular region of international waters, or of a highly migratory species. Most RFMOs with sub-Saharan African membership are focused on tuna, a particularly valuable fish with a vast global market. RFMOs split management of this species into geographic areas. Governing the Atlantic Ocean since 1969 is the International Commission for the Conservation of Atlantic Tunas (ICCAT). In 1993, the Indian Ocean Tuna Commission (IOTC) and the Commission for the Conservation of Southern Bluefin Tuna (CCSBT) were established. They are responsible for the management of tuna and tuna-like species in the Indian Ocean and for the southern bluefin tuna throughout its distribution, respectively. Membership in one RFMO does not preclude membership in another with a focus on a different species or geography. South Africa, for example, is an active member of all three tuna-related RFMOs.'
        },

        {
          tag: 'p',
          html: 'Some RFMOs have much broader mandates. The Commission for the Conservation of Antarctic Marine Living Resources (CCAMLR) was established in 1982. The South East Atlantic Fisheries Organization (SEAFO) is an intergovernmental fisheries science and management body with the primary purpose of ensuring the long-term conservation and sustainable use of all living marine resources in the southeast Atlantic Ocean as well as the environment and marine ecosystems in which the resources occur. The objectives of the South Indian Ocean Fisheries Agreement (SIOFA) are to ensure the long-term conservation and sustainable use of fishery resources including fish, mollusks, crustaceans, and other species and to promote the development of sustainable fisheries. This agreement, which entered into force in 2012, signals increasing understanding of the interconnectedness of marine resources and their importance to the sustainable development of coastal economies.'
        },
        {
          tag: 'p',
          html: 'Without decades of significant international cooperation, fish stocks and other marine resources off the African coast would be at far greater risk of decimation than they are today. Thanks to RFMOs and their member states, fishing on the high seas is not a free-for-all without any state accountability. Fishing, particularly of tuna, is a highly regulated commercial activity. RFMOs are a triumph of the international community, demonstrating how states from around the world can work together to build mutually beneficial regulatory systems.'
        },
        {
          tag: 'links',
          items: [{
            org: '<sup>5</sup> Gertjan de Graaf and Luce Garibaldi, “The Value of African Fisheries,” FAO Fisheries and Aquaculture Circular No. 1093 (2014): 3.',
            url: 'http://www.fao.org/3/a-i3917e.pdf'
          }, ]
        }
      ] // end of els array
    },
    { // Card 4
      title: 'Yaoundé Process',
      menu: 'Yaoundé Process',
      metadata: {
        owner: 'Jay Benson',
        description: 'How the zones and regional centers are set up, describe patrols and success.'
      },
      map: {
        scale: [],
        classes: 'card-eez-layer',
        translate: [],
        highlights: [],
        tooltip: true,
        tooltipHTML: function (iso) {
          var zone = issueAreaData[issueArea].metadata.countryData[iso].yaounde;

          switch (zone) {
            case 1:
              return "Zone A";
              break;
            case 2:
              return "Zone D";
              break;
            case 3:
              return "Zone E";
              break;
            case 4:
              return "Zone F";
              break;
            case 5:
              return "Zone G";
              break;
            default:
              return "Not a member of the Lome Charter";
          }


        },
        load: function(index, file) { // ### *** This only should be for the first card ...

          var layer = 'card-' + index + '-layer';

          d3.select('.card-eez-layer')
            .classed(layer, true);
        },
        switch: function(index) {
          var yaounde = issueAreaData[issueArea].metadata.countryData;
          var card = 'yaounde';
          var i = 0;
          for (iso in yaounde) {
            var cat = yaounde[iso][card] - 1;

            if (cat >= 0) {
              //  console.log(country.ia2c3);
              d3.selectAll('.country.' + iso)
                .classed('active', true)
                .transition()
                .delay(i * 10)
                .style('fill', colorBrew[cat][0])
                .style('stroke', colorBrew[cat][1]); // ### what colors??
              //  .style('stroke', 'white');

              d3.selectAll('.eez.' + iso)
                .classed('active', true)
                .transition()
                .delay(i * 10)
                .style('stroke', colorBrew[cat][0]); // ### what colors?? Also EEZ opacity is meh ...

              i++;

            }
          }
        }
      },
      els: [{
          tag: 'h1',
          text: 'Yaoundé Process',
        },
        {
          tag: 'caption',
          text: 'A model for regional maritime security cooperation'
        },
        // {
        //   tag: 'legend',
        //   text: 'Map Legend',
        //   legendContent: '<p>Yaoundé Code of Conduct multi-national level information sharing zones:</p><div class="brew-00 legend-entries light">Zone A</div><br /><div class="brew-10 legend-entries light">Zone D</div><br /><div class="brew-20 legend-entries light">Zone E</div><br /><div class="brew-30 legend-entries light">Zone F</div><br /><div class="brew-40 legend-entries light">Zone G</div><br />'
        // },
        //###Insert Graphic: There is a graphic below called information sharing in West Africa I would like to try and use that, but I am not sure if that is possible in the web format. If not we can use that as an image within the card. In that case I think it would be good to have a map zoomed into west/central Africa with two components. First is a shaded map with ECOWAS countries in one color and ECCAS countries in another and corresponding labels. The second would be points which show the centers for the ICC, CRESMAC and CRESMAO. All country lists, labels and GPS coordinates will be in the excel file I will send.
        {
          tag: 'p',
          html: 'In response to the rising threat of piracy and other forms of maritime crime, states and regional institutions in the Gulf of Guinea (GoG) developed the Yaoundé process, a series of regional arrangements which provide for enhanced cooperation in the area of maritime security.'
        },
        {
          tag: 'p',
          html: 'The central agreement of the Yaoundé process is the Yaoundé Code of Conduct (YCoC). The YCoC was agreed to in 2013 by 25 states in West and Central Africa. The agreement outlines commitments for combating maritime crime, and proposed the creation of the Interregional Coordination Centre (ICC), the institution responsible for overseeing the implementation of the objectives laid out in the YCoC. The subsequent Yaoundé Memorandum of Understanding lays out the organizational structure of the ICC.'
        },
        {
          tag: 'img',
          src: '../../assets/international-cooperation/information-sharing-in-West-Africa.png', // This should be on the Stable Seas Deck - comments
        },
        {
          tag: 'p',
          html: 'The ICC coordinates activities for the entire GoG between two regionally based centers, the Regional Center for Maritime Security in Central Africa (CRESMAC) and the Regional Center for Maritime Security in West Africa (CRESMAO). The structure is then further divided into five zones (three in CRESMAO and two in CRESMAC) of three to five states, each with its own Multinational Maritime Coordination Center (MMCC).'
        },
        {
          tag: 'p',
          html: 'The Yaoundé process takes a comprehensive approach to maritime security, identifying 12 different forms of maritime crime in the YCoC. The process provides a structure for enhancing all-around maritime security in the GoG through regional information-sharing, capacity building, and coordination of multinational maritime security operations. By improving the sharing of information regarding emerging and ongoing threats and ensuring that regional maritime security actors have the institutional and logistical arrangements in place for multinational operations, the region can better respond to the transnational nature of maritime crime.'
        },
        {
          tag: 'p',
          html: 'The Yaoundé process is still early in its development. Key steps need to be taken to build the capacity of not only state maritime security forces, but also of CRESMAC, CRESMAO, and the MMCCs. That said, the Yaoundé process has several characteristics which may make it a valuable model for the coordination of regional maritime security.'
        },
        {
          tag: 'p',
          html: 'The first aspect is its comprehensiveness. The process recognizes the interconnected nature of various forms of maritime crime and puts forward priorities for combating each. A focus on a single, high-visibility issue risks ignoring other crimes such as maritime pollution or illegal, unreported, and unregulated fishing which have significant, long-term effects on the economic and social wellbeing of a region.'
        },
        {
          tag: 'p',
          html: 'The process also makes use of existing regional institutions such as the Economic Community of West African States (ECOWAS) and the Economic Community of Central African States (ECCAS). By building upon these established institutions, the ICC can leverage existing relationships with individual states and the larger African Union system, gaining some level of access to their resources and enhancing its sustainability beyond a period of particular insecurity or the decline of an individual maritime threat.'
        },
        {
          tag: 'p',
          html: 'Though the Yaoundé process is still young and many of the functions envisioned within it still need to be developed, it may serve as a useful model for regions that have a large number of states to coordinate to refer to in confronting a variety of transnational maritime security threats.'
        },
        //###Insert video, quote, and image
      ] // end of els array
    },
    { // Card 5
      title: 'East Africa',
      menu: 'East Africa',
      metadata: {
        owner: 'Jay Benson',
        description: 'Multilateralism off the horn of Africa.'
      },
      map: {
        scale: [],
        classes: '',
        //path: '../../data/international-cooperation/irtc.json',
        //    extent: [[38,2],[71,21]], // ### is this the right zoom level?
        translate: [],
        highlights: [],
        tooltip: true,
        tooltipHTML: function (iso) {

          var dcoc = issueAreaData[issueArea].metadata.countryData[iso].djibouti;
          if (dcoc == 1) {
            return "Member of the Djibouti Code of Conduct";

          } else {
            return "Not a member of the Djibouti Code of Conduct";
          }
        },
        load: function(index, file) { // ### *** This only should be for the first card ...

          var layer = 'card-' + index + '-layer';

          d3.select('.card-eez-layer')
            .classed(layer, true);

        },
        switch: function(index) {

          var dcoc = issueAreaData[issueArea].metadata.countryData;
          var i = 1;
          var card = 'djibouti';
          //      console.log ('card', card);
          for (iso in dcoc) {

            if (dcoc[iso][card] == 1) {
              d3.selectAll('.country.' + iso)
                .classed('active', true)
                .transition().delay(i * 10)
                .style('fill', function() {
                  return themeColor(0.5);
                })
                .style('stroke', function() {
                  return themeColor(1);
                });

              d3.selectAll('.eez.' + iso)
                .classed('active', true)
                .transition().delay(i * 10)
                //  .style('fill', function () {return rampColor(0.1);})
                .style('stroke', function() {
                  return themeColor(1);
                })
                .style('stroke-width', '2px');
                i++;
            }
          }

          d3.selectAll('.card-' + index + '-layer')
            .classed('invisible', false);

        }
      },
      els: [{
          tag: 'h1',
          text: 'East Africa',
        },
        {
          tag: 'caption',
          text: 'An emerging cross-continental consensus'
        },
        // {
        //   tag: 'legend',
        //   text: 'Map Legend',
        //   legendContent: '<em>Highlighted countries are sub-Saharan members of the Djibouti Code of Conduct</em>.'
        // },
        //##Insert Map: Similar to above it would be great to use the East African Info sharing image below. If not, it would be great to have all of the DCoC countries highlighted as well as the location of the information exchange centers. The excel file will have all the countries, labels for information sharing centers and corresponding coordinates.
        {
          tag: 'p',
          html: 'In the mid- to late 2000s, the Western Indian Ocean was the setting for the world’s most high-profile maritime security crisis. In a matter of a few years, piracy grew from a nascent criminal enterprise to a mature industry which was seizing cargo ships and tankers far out into the ocean. In response, states agreed to the Djibouti Code of Conduct (DCoC) in an effort to enhance cooperative regional maritime security.'
        },
        {
          tag: 'p',
          html: 'Twenty countries signed the DCoC in 2009, including all the 10 countries bordering the Indian Ocean studied in this report. The agreement was further strengthened in 2010 with the establishment of an international trust fund financed by donor states in order to build regional capacity and implementation of the agreement.<sup>6</sup> In January 2017, signatory states agreed to the Jeddah Amendment to the DCoC which expanded the scope of maritime crimes to be addressed and incorporated efforts to build the Blue Economy.<sup>7</sup>'
        },
        {
          tag: 'img',
          src: '../../assets/international-cooperation/EastAfricaInfoSharingMap-01.png', // This should be on the Stable Seas Deck - comments
        },

        {
          tag: 'p',
          html: 'The DCoC’s primary tools for addressing these threats thus far have been regional capacity building and information sharing. Toward these ends, the agreement lays out plans for signatories to exchange ship riders and other maritime law enforcement officials and establishes National Focal Points for each signatory as well as three multinational information exchange centers. These information exchange centers are based in Sana’a, Mombasa, and Dar es Salaam, and lead coordination efforts among northern, central, and southern groupings of signatory states respectively. In addition, the DCoC places a premium on <a class="maritime-enforcement inline" href="../../maritime-enforcement#1">maritime domain awareness</a>, and efforts are being made in conjunction with a variety of international partners across the Western Indian Ocean to put in place additional automatic identification and radar systems in order to provide regional maritime security forces with a clearer picture of their operating environment.'
        },
        {
          tag: 'p',
          html: 'The DCoC has had some success in countering piracy and armed robbery in the Western Indian Ocean. However, the Jeddah Amendment changes the scope of the agreement to include cooperation on a wider range of maritime crimes and governance. It is yet to be seen if the DCoC can be effective in addressing this larger issue area. If it is to meet this new challenge, it will have to overcome several other challenges first.'
        },
        {
          tag: 'p',
          html: 'Most of the challenges presented by this change of scope are due to the DCoC’s origin as a response to the dramatic increase in piracy. The urgency of the situation meant that signatory states were eager to cooperate to address the pressing security threat, but it is yet to be seen if there is sufficient political will to pivot toward a broader framework for cooperative maritime governance. The urgent nature of its formation also means that the DCoC is not rooted in existing regional organizations such as the Intergovernmental Authority on Development. This means DCoC efforts cannot utilize the broader resources and political leverage of such organizations. Finally, if the DCoC is to realize the expanded objectives of the Jeddah Amendment, it will need to establish a sustainable source of funding. As the threat of piracy in the Western Indian Ocean becomes an increasingly distant memory, fewer and fewer donors are likely to prioritize giving to the DCoC’s trust fund. Without a sustainable source of funding, implementing  the expanded agenda will be extremely difficult.'
        },
        {
          tag: 'links',
          items: [{
              org: '<sup>6</sup> “Project Implementation Unit,” International Maritime Organization, accessed 25 August 2017,',
              url: 'http://www.imo.org/en/OurWork/Security/PIU/Pages/Project-Implementation-Unit.aspx'
            },
            {
              org: '<sup>7</sup> “Regional Maritime Piracy Agreement Broadened to Cover Other Illicit Maritime Activity,” International Maritime Organization, 13 January 2017,',
              url: 'http://www.imo.org/en/mediacentre/pressbriefings/pages/4-dcoc-widened.aspx'
            },
          ]
        },
        //###Insert graphics
      ] // end of els array
    },
    // { // Card 6
      //   title: 'Operation Copper',
      //   menu: 'Operation Copper',
      //   metadata: {
      //     owner: 'Jay Benson',
      //     description: 'Multinational anti-piracy efforts in the Mozambican straits.'
      //   },
      //   map: {
      //     scale: [],
      //     path: '../../data/international-cooperation/south-indian-piracy.csv',
      //     classes: '',
      //     translate: [],
      //     extent: [
      //       [30, -40],
      //       [100, 10]
      //     ],
      //     highlights: [],
      //     tooltip: true,
      //     units: {
      //       text: 'xo units',
      //       multiplier: 100
      //     },
      //     load: function(index, csv) { // ### *** This only should be for the first card ...
      //
      //       var layer = 'card-' + index + '-layer';
      //       d3.csv(csv, function(vals) {
      //         vals.forEach(function(d) {
      //           d.lat = +d.lat;
      //           d.lon = +d.lon;
      //           d.weight = +d.weight;
      //         });
      //
      //         var copper = mapg.append('g')
      //           .classed('card-layer copper-incidents invisible ' + layer, true);
      //
      //         copper.selectAll('circle')
      //           .data(vals).enter()
      //           .append('circle')
      //           .attr('cx', function(d) {
      //             return projection([d.lon, d.lat])[0];
      //           })
      //           .attr('cy', function(d) {
      //             return projection([d.lon, d.lat])[1];
      //           })
      //           .attr('r', '3px')
      //           .style('fill', function(d, i) {
      //             return rampColor(i / vals.length);
      //           })
      //           // .style('fill-opacity', function (d, i) {
      //           //   return i / vals.length;                // ### this doesn't communicate what it is meant to . . . maybe different colors for different years ??
      //           // })
      //           .classed('copper-incident', true);
      //       })
      //
      //     },
      //     switch: function(index) {
      //       d3.selectAll('.card-' + index + '-layer')
      //         .classed('invisible', false);
      //
      //     }
      //   },
      //   els: [{
      //       tag: 'h1',
      //       text: 'Operation Copper',
      //     },
      //     {
      //       tag: 'caption',
      //       text: 'Neighbors help neighbors fight pirates'
      //     },
      //     {
      //       tag: 'legend',
      //       text: 'Map Legend',
      //       legendContent: '<em>Points indicate the coordinates of West Indian Ocean piracy-related incidents reported by the International Maritime Organization south of the equator, 2006 - 2016. Lighter points represent older events</em>.'
      //     },
      //     //###Insert map: Zoom into Mozambique channel and color all the EEZs differently. I feel like that might help convey the complexity of different jurisdictions in the channel
      //     {
      //       tag: 'p',
      //       html: 'The rise of piracy off the coast of Somalia catalyzed several high-profile efforts by international actors to <a class="piracy inline" href="../../piracy#2">protect shipping and improve maritime security in the region</a>. It also drove a lesser-known regional operation aimed at stopping the southward spread of piracy into the Mozambique Channel.<sup>8</sup>'
      //     },
      //     {
      //       tag: 'img',
      //       src: '../../assets/international-cooperation/south-africa-281265_1920.jpg',
      //       alt: 'South African naval vessels are integral not only to counter-piracy, but also to long-term maritime security.',
      //       caption: 'South African naval vessels are integral not only to counter-piracy, but also to long-term maritime security.'
      //     },
      //     {
      //       tag: 'p',
      //       html: 'The threat of increased piracy in the channel threatened the economic and security interests of regional states and the wider international community. The channel is a key transit area for maritime shipping, particularly for South African trade, and the site of major oil and gas reserves which have drawn investment from multinational energy firms.<sup>9</sup> Fears of piracy’s spread to the channel were confirmed in December 2010 when there were several piracy incidents off the coast of Mozambique.<sup>10</sup>'
      //     },
      //     {
      //       tag: 'p',
      //       html: 'In response to these threats, South Africa spearheaded Operation Copper in 2011.<sup>11</sup> The agreement allowed South African naval vessels to conduct patrols in Mozambican waters, and also conduct multinational training, intelligence gathering, and information sharing. Tanzania later joined and left the operation. The presence of South African frigates, offshore patrol vessels, and air assets greatly increased both <a class="maritime-enforcement inline" //href="../../maritime-enforcement#2">maritime domain awareness</a> (MDA) and the assets available to counter piracy in the channel. The operation has been successful in this mission. In April of 2012, a South African naval resupply vessel that was deployed as part of Operation Copper assisted international forces in searching down and arresting seven pirates.<sup>12</sup> These counterpiracy operations are valuable in and of themselves, but even more important to the long-term maritime //security of the region are Operation Copper’s maritime domain awareness and capacity-building components.'
      //     },
      //     {
      //       tag: 'p',
      //       html: 'Operation Copper is a valuable model for intra-regional cooperation and capacity building, though there may be limited opportunities to replicate its success in the near future. From the perspective of national interests, it makes sense for states to attempt to cooperate with and improve the maritime security capacities of their immediate neighbors. Threats to maritime security such as piracy, trafficking, and IUU fishing are fluid and can easily spill across long, difficult-to-monitor maritime boundaries. As such, improving the maritime security of one’s neighbors serves to protect a state’s own maritime space before those same forms of maritime crime spread into one’s own waters.'
      //     },
      //     {
      //       tag: 'p',
      //       html: 'However, replicating the success of Operation Copper will be fairly difficult. Simply put, there are few maritime security forces in the region with the capacity to maintain robust security in their own maritime spaces while simultaneously sustaining patrols in a neighbor’s waters. Operation Copper has become expensive and difficult to maintain even for the South African Navy.<sup>13</sup>  What may serve a similar purpose at a lower cost is to increase bilateral training and shared MDA efforts. Such an approach would build cooperation between adjacent forces and increase awareness about the potential spread of maritime security threats without incurring the costs of long-range patrols.'
      //     },
      //     {
      //       tag: 'links',
      //       items: [{
      //           org: '<sup>8</sup> Louis Bergeron, “The Forgotten Chokepoint: The Mozambique Channel’s Rich Past and Bright but Uncertain Future,” Center for International Maritime Security, 25 December 2014,',
      //           url: 'http://cimsec.org/forgotten-chokepoint-mozambique-channels-rich-past-bright-insecure-future/14071'
      //         },
      //         {
      //           org: '<sup>9</sup> Borges Nhamire, “Eni Finalizes $7 Billion Mozambique Gas Project Investment,” <em>Bloomberg</em>, 1 June 2017,',
      //           url: 'https://www.bloomberg.com/news/articles/2017-06-01/eni-finalizes-7-billion-investment-in-mozambique-gas-project'
      //         },
      //         {
      //           org: '<sup>10</sup> Guy Martin, “Operation Copper Now Only with SA and Mozambique,” <em>DefenceWeb</em>, 20 March 2014,',
      //           url: 'http://www.defenceweb.co.za/index.php?option=com_content&view=article&id=34071:operation-copper-now-only-with-sa-and-mozambique&catid=108:maritime-security'
      //         },
      //         {
      //           org: '<sup>11</sup> “South Africa and Mozambique Join Forces to Fight Piracy,” <em>BBC</em>, 2 June 2011,',
      //           url: 'http://www.bbc.com/news/world-africa-13628132'
      //         },
      //         {
      //           org: '<sup>12</sup> South African Navy Helps Catch Pirates,” <em>DefenceWeb</em>, 23 April 2012,',
      //           url: 'http://www.defenceweb.co.za/index.php?option=com_content&view=article&id=25142:south-african-navy-helps-catch-pirates&catid=108:maritime-security&Itemid=233'
      //         },
      //         {
      //           org: '<sup>13</sup> Dean Wingrin, “Operation Copper Stretching SA Navy,” <em>DefenceWeb</em>, 26 March 2015,',
      //           url: 'http://www.defenceweb.co.za/index.php?option=com_content&view=article&id=38541:operation-copper-stretching-sa-navy&catid=111:sa-defence&Itemid=242'
      //         },
      //       ]
      //     },
      //     //###Insert Map and Graphics
      //   ] // end of els array
      // },
    { // Card 7
      title: 'African Union Efforts',
      menu: 'AU Efforts',
      metadata: {
        owner: 'Jay Benson',
        description: 'Move to comprehensive continental strategy.'
      },
      map: {
        scale: [],
        classes: '',
        highlights: [],
        tooltip: true,
        tooltipHTML: function (iso) {

          var lome = issueAreaData[issueArea].metadata.countryData[iso].lome;
          if (lome == 1) {
            return "Signatory of the Lome Charter";

          } else {
            return "Not a signatory of the Lome Charter";
          }
        },
        load: function(index, csv) { // ### *** This only should be for the first card ...

          var layer = 'card-' + index + '-layer';
          d3.select('.card-eez-layer')
            .classed(layer, true);

        },
        switch: function(index) {
          var lome = issueAreaData[issueArea].metadata.countryData;

          var i = 1;
          var card = 'lome';
          for (iso in lome) {

            if (lome[iso][card] == 1) {
              d3.selectAll('.country.' + iso)
                .classed('active', true)
                .transition().delay(i * 10)
                .style('fill', function() {
                  return themeColor(0.5);
                })
                .style('stroke', function() {
                  return themeColor(1);
                });

              d3.selectAll('.eez.' + iso)
                .classed('active', true)
                .transition().delay(i * 10)
                //  .style('fill', function () {return rampColor(0.1);})
                .style('stroke', function() {
                  return themeColor(1);
                })
                .style('stroke-width', '2px');
                i++;
            }
          }

          d3.selectAll('.card-' + index + '-layer')
            .classed('invisible', false);
        }
      },
      els: [{
          tag: 'h1',
          text: 'African Union Efforts',
        },
        {
          tag: 'caption',
          text: 'An ambitious plan for governing African waters'
        },
        {
          tag: 'legend',
          text: 'Map Legend',
          legendContent: '<em>Highlights represent sub-Saharan countries that have signed the African Union\'s Lomé Charter</em>.'
        },
        //###Insert Map: This one is tough. Do you think it would be possible to recalculate the scores in the enforcement section but based on the AU’s five regions (only 4 of which are relevant to SSA)? I think it could be interesting for getting an idea of what larger regions in SSA have the capacity to really improve governance towards AIMS
        {
          tag: 'p',
          html: 'In January of 2014, the African Union (AU) adopted Africa’s Integrated Maritime Strategy (AIMS).<sup>14</sup>  AIMS was created with the goals of providing a framework for enhanced governance in Africa’s maritime domain, developing a platform for shared maritime policy, and facilitating the development of the <a class="blue-economy inline" href="../../blue-economy">Blue Economy</a>. Implementation of the ambitious strategy will be challenging, but the economic, security, and governance ramifications of its success have the potential to transform the African maritime space.'
        },
        {
          tag: 'p',
          html: 'Like maritime spaces around the world, the African maritime domain has been confronted with a variety of security and governance challenges from <a class="piracy inline" href="../../piracy">piracy</a> to <a class="maritime-mixed-migration inline" href="../../maritime-mixed-migration">human trafficking</a> and <a class="maritime-enforcement inline" href="../../maritime-enforcement#2">waste dumping</a> to <a class="fisheries inline" href="../../fisheries#1">IUU Fishing</a>. AIMS was created as an effort to build a comprehensive, unified set of maritime policies designed to address these challenges and thereby develop the Blue Economy. AIMS is wide-ranging, addressing issues of economic development, environmental protection, maritime crime, disaster management, and maritime law, to name a few.<sup>15</sup>'
        },
        {
          tag: 'p',
          html: 'The document serves as a vision of shared policy. But if it is to become reality, there is still a tremendous amount of work to be done. Coordinated efforts will need to be made in the areas of:'
        },
        {
          tag: 'ul',
          rows: ['Developing political will. AIMS suggests several areas in which domestic laws regarding maritime governance should be synchronized and even puts forward the concept of a Combined Exclusive Maritime Zone of Africa. This level of integration on maritime policy will require substantial political will and the resolution of Africa’s ongoing maritime boundary disputes.', 'Data collection and research. There is a dearth of data and basic research on many maritime issues in Africa. AIMS identifies rectifying this gap as being key to the formation of empirically informed policies.', 'Infrastructure and equipment. In order to implement AIMS, states and other actors in the region will need to significantly upgrade equipment and infrastructure necessary for maritime governance such as patrol vessels, port facilities, and remote sensing systems which enhance maritime domain awareness.', 'In addition to having the necessary physical equipment, African actors will need to train a population of maritime professionals in skillsets such as fisheries management, navigation, and maritime law.']
        },
        {
          tag: 'p',
          html: 'Perhaps the best way to ensure the success of AIMS would be to establish an institutional home for efforts toward its implementation. The AU currently has no office or department focused exclusively on its maritime initiatives. The establishment of a well-resourced and politically influential entity to oversee these efforts would greatly improve AIMS implementation.'
        },
        {
          tag: 'p',
          html: 'The ramifications of full implementation of AIMS make tackling these formidable challenges worth the effort. Successful AIMS implementation has the potential to drastically improve maritime security and governance and unlock the potential of Africa’s Blue Economy.'
        },
        {
          tag: 'links',
          items: [{
              org: '<sup>14</sup> “African Maritime Action Plan Adopted,” <em>Maritime Executive</em>, 2 February 2014.',
              url: 'http://www.maritime-executive.com/article/African-Maritime-Action-Plan-Adopted-2014-02-02'
            },
            {
              org: '<sup>15</sup> “2050 Africa’s Integrated Maritime Strategy,” African Union, 2012, Version 1.0.',
              url: 'http://cggrps.org/wp-content/uploads/2050-AIM-Strategy_EN.pdf'
            },
          ]
        },
        //###Insert image, video, and quote
      ] // end of els array
    },
    { // Card 8
      title: 'A Global Effort',
      menu: 'A Global Effort',
      metadata: {
        owner: 'Curtis Bell',
        description: 'A Global Effort'
      },
      map: {
        scale: [],
        classes: 'card-8-layer',
        translate: [],
        highlights: null,
        load: function(index, file) { // ### *** This only should be for the first card ...
          // Color EEZ according to master Stable Seas index
          var layer = 'card-' + index + '-layer';

          d3.select('.card-eez-layer')
            .classed(layer, true);
        },
        switch: function(index) {

          choropleth(index, 1, 'index');


        }
      },
      els: [{
          tag: 'h1',
          text: 'A Global Effort'
        },
        {
          tag: 'caption',
          text: 'How global partners complement Africa\'s maritime security strategies'
        },
        {
          tag: 'legend',
          text: 'Map Legend',
          legendContent: '<em>Highlighted countries are party to the Convention for the Suppression of Unlawful Acts against the Safety of Maritime Navigation.</em>'
        },
        {
          tag: 'p',
          html: 'African maritime governance is of material interest to stakeholders well beyond the African continent. International institutions, non-African states, and private stakeholders are important participants in the global effort to improve sub-Saharan maritime security.'
        },
        {
          tag: 'img',
          src: '../../assets/international-cooperation/EUCAP-NESTOR-Djibouti-joint-training.jpg', // This should be on the Stable Seas Deck - comments
          alt: 'Command exercise, Crew of EU Naval Force frigate FGS Augsburg, police officers with EUCAP NESTOR and Djibouti Navy. Photo credit: European Union Naval Force',
          caption: 'Command exercise, Crew of EU Naval Force frigate FGS Augsburg, police officers with EUCAP NESTOR and Djibouti Navy. Photo credit: European Union Naval Force'
        },

        {
          tag: 'p',
          html: 'UN organizations play a very valuable role, primarily through the <a href="https://www.unodc.org/unodc/en/piracy/index_new.html" target="_blank">UN Office on Drugs and Crime (UNODC)</a> and the <a href="http://www.imo.org/en/Pages/Default.aspx" target="_blank">International Maritime Organization (IMO)</a>. The UNODC seeks to build national capacities for maritime law enforcement through the Global Maritime Crime Program, which, for example, is working with the Federal Government of Somalia to build the nascent state justice system. IMO does a variety of work, much of it focused on maritime law and the building of regional maritime institutions.'
        },
        {
          tag: 'p',
          html: 'Regional bodies also play an important role. The EU, for example, has three different programs in the realm of African maritime governance and security. The Program to Promote Maritime Security is EU-funded but implemented by regional institutions. It seeks to counteract piracy and crime in the Western Indian Ocean by building local maritime security capacity and undermining the root causes of these activities. Similarly, EUCAP Somalia builds capacity through providing training in relevant skillsets. Additionally, EU NAVFOR has deployed European naval vessels to protect vital shipping routes threatened by the rise of piracy off the Somali coast.'
        },
        {
          tag: 'p',
          html: 'More purpose-specific coalitions also contribute. Maritime Domain Awareness for Trade—Gulf of Guinea, an initiative of the French and British navies, serves as a maritime information-sharing center in the Gulf of Guinea, helping to mitigate the general lack of maritime domain awareness in African waters. The Combined Maritime Forces is another multilateral initiative comprised of 31 states which patrols the Western Indian Ocean on counter-piracy and counter-terrorism missions.'
        },
        {
          tag: 'p',
          html: 'Finally, individual states can also partner with local actors to improve maritime security. U.S. Naval Forces Africa provides training to African maritime security forces and puts on <a class="maritime-enforcement inline" href="../../maritime-enforcement#4">annual naval exercises</a> aimed at improving regional interoperability. Similarly, the French ASECMAR project supports reform of maritime security institutions in the Gulf of Guinea.'
        },
        {
          tag: 'p',
          html: 'This is by no means an exhaustive list. Across the globe, individual states, civil society workers, multilateral institutions, business associations, academics, security professionals, and a host of others are collaborating to help address the complex security and governance challenges faced in African waters.'
        },
        //###Insert images, videos, and quotes
      ]
    },

    //   ]
    // }
  ] // End of cards array
};