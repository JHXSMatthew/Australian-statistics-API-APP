#!/usr/bin/perl -w
# My first script

use strict; 
use warnings; 

use LWP::Simple;

sub main
{
	my $startDate = "2013-01-01";
	my $endDate = "2013-01-02";

	#parameters: 
	my @statisticsArea;
	$statisticsArea[0] = "Retail";
	$statisticsArea[1] = "MerchandiseExports";

	my @state;
	$state[0] = "AUS";
	$state[1] = "NSW";
	$state[2] = "VIC";
	$state[3] = "QLD";
	$state[4] = "SA";
	$state[5] = "WA";
	$state[6] = "TAS";
	$state[7] = "NT";
	$state[8] = "ACT";

	my @retailCategory;
	$retailCategory[0] = "Total";
	$retailCategory[1] = "Food";
	$retailCategory[2] = "HouseholdGoods";
	$retailCategory[3] = "ClothingFootwareAndPersonalAccessory";
	$retailCategory[4] = "DepartmentStores";
	$retailCategory[5] = "CafesResturantsAndTakeawayFood";
	$retailCategory[6] = "Other";

	my @merchandiseCategory;
	$merchandiseCategory[0] = "Total";
	$merchandiseCategory[1] = "FoodAndLiveAnimals";
	$merchandiseCategory[2] = "BeveragesAndTobacco";
	$merchandiseCategory[3] = "CrudMaterialAndInedible";
	$merchandiseCategory[4] = "MineralFuelLubricentAndRelatedMaterial";
	$merchandiseCategory[5] = "AnimalAndVegitableOilFatAndWaxes";
	$merchandiseCategory[6] = "ChemicalsAndRelatedProducts";
	$merchandiseCategory[7] = "ManufacturedGoods";
	$merchandiseCategory[8] = "MachineryAndTransportEquipments";
	$merchandiseCategory[9] = "OtherManufacturedArticles";
	$merchandiseCategory[10] = "Unclassified";

	#date

	my $k;
	for (my $i=0;$i<=scalar @statisticsArea - 1;$i++) {
		my $currentStatArea = $statisticsArea[$i];

		for (my $j=0;$j<=scalar @state - 1;$j++) {
			my $currentState = $state[$j];

			if ($i == 0) {
				for ($k=0;$k<=scalar @retailCategory - 1;$k++) {
					my $currentRetailCategory = $retailCategory[$k];
					getData($currentStatArea,$currentState,$currentRetailCategory,$startDate,$endDate);
				}

			} else {
				for ($k=0;$k<=scalar @merchandiseCategory - 1;$k++) {
					my $currentMerchCategory = $merchandiseCategory[$k];
					getData($currentStatArea,$currentState,$currentMerchCategory,$startDate,$endDate);
				}
			}
		}
	}


    
}


sub getData
{
	my ($area, $state, $category, $startDate, $endDate) = @_;
	my $url = "http://45.76.114.158/api?StatisticsArea=$area&State=$state&Category=$category&startDate=$startDate&&endDate=$endDate";
	my $data = get($url);
	my $string;
    if (defined $data) {
    	#print "Found page...\n";
    	$string = "SUCCESS - $area - $state - $category - $startDate - $endDate\n";
    	#print $data;
    } else {
    	#print "Error detected...\n";
    	$string = "ERROR - $area - $state - $category - $startDate - $endDate\n";
	}
	#print $string;
	print $string;
	print "URL = $url\n\n";
}

main();