Fuzzy Search Library from https://github.com/xdrop/fuzzywuzzy port to gradle and Jigsaw

Author Panayiotis (xdrop) : https://github.com/xdrop

# JavaWuzzy
[![Build Status](https://travis-ci.org/xdrop/fuzzywuzzy.svg?branch=master)](https://travis-ci.org/xdrop/fuzzywuzzy)  [ ![Download](https://api.bintray.com/packages/xdrop/FuzzyWuzzy-Java/fuzzywuzzy/images/download.svg?version=1.1.10) ](https://github.com/xdrop/fuzzywuzzy/releases)

## FuzzyWuzzy Java Implementation
Fuzzy string matching for java based on the [FuzzyWuzzy](https://github.com/seatgeek/fuzzywuzzy) Python algorithm. The algorithm uses [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) to calculate similarity between strings.

I've personally needed to use this but all of the other Java implementations out there either had a crazy amount of
dependencies, or simply did not output the correct results as the python one, so I've decided to properly re-implement
this in Java. Enjoy!


* No dependencies!
* Includes implementation of the super-fast [python-Levenshtein](https://github.com/ztane/python-Levenshtein/) in Java!
* Simple to use!
* Lightweight!
* Credits to the great folks at seatgeek for coming up with the algorithm ([More here](http://chairnerd.seatgeek.com/fuzzywuzzy-fuzzy-string-matching-in-python/))


## Installation
### Maven Central
```xml
<dependency>
    <groupId>me.xdrop</groupId>
    <artifactId>fuzzywuzzy</artifactId>
    <version>1.1.10</version>
</dependency>
```

### Gradle
```gradle
compile 'me.xdrop:fuzzywuzzy:1.1.10'
```

### Jar release
Download the latest release [here](https://github.com/xdrop/fuzzywuzzy/releases) and add to your classpath

## Usage

#### Simple Ratio
```groovy
FuzzySearch.ratio("mysmilarstring","myawfullysimilarstirng")
72

FuzzySearch.ratio("mysmilarstring","mysimilarstring")
97

```

#### Partial Ratio
```groovy
FuzzySearch.partialRatio("similar", "somewhresimlrbetweenthisstring")
71
```

#### Token Sort Ratio
```groovy
FuzzySearch.tokenSortPartialRatio("order words out of","  words out of order")
100
FuzzySearch.tokenSortRatio("order words out of","  words out of order")
100
```

#### Token Set Ratio
```groovy
FuzzySearch.tokenSetRatio("fuzzy was a bear", "fuzzy fuzzy fuzzy bear")
100
FuzzySearch.tokenSetPartialRatio("fuzzy was a bear", "fuzzy fuzzy fuzzy bear")
100
```

#### Weighted Ratio
```groovy
FuzzySearch.weightedRatio("The quick brown fox jimps ofver the small lazy dog", "the quick brown fox jumps over the small lazy dog")
97
```

#### Extract
```groovy
// groovy

FuzzySearch.extractOne("cowboys", ["Atlanta Falcons", "New York Jets", "New York Giants", "Dallas Cowboys"])
(string: Dallas Cowboys, score: 90, index: 3)
```
```groovy
FuzzySearch.extractTop("goolge", ["google", "bing", "facebook", "linkedin", "twitter", "googleplus", "bingnews", "plexoogl"], 3)
[(string: google, score: 83, index: 0), (string: googleplus, score: 63, index:5), (string: plexoogl, score: 43, index: 7)]
```
```groovy
FuzzySearch.extractAll("goolge", ["google", "bing", "facebook", "linkedin", "twitter", "googleplus", "bingnews", "plexoogl"]);
[(string: google, score: 83, index: 0), (string: bing, score: 20, index: 1), (string: facebook, score: 29, index: 2), (string: linkedin, score: 29, index: 3), (string: twitter, score: 15, index: 4), (string: googleplus, score: 63, index: 5), (string: bingnews, score: 29, index: 6), (string: plexoogl, score: 43, index: 7)]
// score cutoff
FuzzySearch.extractAll("goolge", ["google", "bing", "facebook", "linkedin", "twitter", "googleplus", "bingnews", "plexoogl"], 40) 
[(string: google, score: 83, index: 0), (string: googleplus, score: 63, index: 5), (string: plexoogl, score: 43, index: 7)]
```
```groovy
FuzzySearch.extractSorted("goolge", ["google", "bing", "facebook", "linkedin", "twitter", "googleplus", "bingnews", "plexoogl"]);
[(string: google, score: 83, index: 0), (string: googleplus, score: 63, index: 5), (string: plexoogl, score: 43, index: 7), (string: facebook, score: 29, index: 2), (string: linkedin, score: 29, index: 3), (string: bingnews, score: 29, index: 6), (string: bing, score: 20, index: 1), (string: twitter, score: 15, index: 4)]
// score cutoff
FuzzySearch.extractSorted("goolge", ["google", "bing", "facebook", "linkedin", "twitter", "googleplus", "bingnews", "plexoogl"], 3);
[(string: google, score: 83, index: 0), (string: googleplus, score: 63, index: 5), (string: plexoogl, score: 43, index: 7)]
```

## Credits

- seatgeek
- Adam Cohen
- David Necas (python-Levenshtein)
- Mikko Ohtamaa (python-Levenshtein)
- Antti Haapala (python-Levenshtein)
