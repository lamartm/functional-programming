# Functional Programming

Voor de Volkskrant moeten wij vooronderzoek doen op een aantal datasets en hieruit interessante inzichten uit halen. Bij functional programming zal ik vooral kijken wat er in de 
datasets allemaal in zitten en met behulp van functional patterns ze proberen op te schonen en presenteerbaar te maken.

In deze repo zal ik al mijn keuzes voor het opschonen en presenteren van de data documenteren en uitleggen.

# Onderzoeksvraag

## Hoofdvraag

### Wat zijn de mogelijkheden van de carpool locaties binnen Nederland?

De carpool locaties binnen Nederland beschikken niet allemaal van dezelfde voorzieningen. Zo heeft de een laadpunt en de ander toegankelijkheid voor gehandicapten. Ik ga kijken wat nu precies de mogelijkheden zijn van de carpool locaties, en welke verbanden ik hieruit kan maken met de locaties.

## Deelvragen
1. Hoeveel parkeerplaatsen beschikken de carpool locaties?
2. Waar in Nederland kan je het best met een elektrisch auto komen om te carpoolen?
3. Welke carpool locaties zijn toegankelijk voor gehandicapten?
4. Wat zijn de afstanden van de carpool locaties met verschillende voorzieningen?

### Variabelen

Ik zal hiervoor de dataset **GEO Carpool** gebruiken en ga de volgende variabellen gebruiken:

- AreaDesc
- aantal_parkeer_plaatsen
- aantal_laad_punten
- toegankelijk_voor_gehandicapten
- Location

## Verwachtingen

De carpool locatie met de meeste parkeerplaatsen zal naar mijn verwachting veel voorzieningen hebben. De afstanden tussen de carpool locaties met verschillende voorzieningen zal waarschijnlijk niet erg groot zijn.
