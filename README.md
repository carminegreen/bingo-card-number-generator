# Generatore di cartelle per la tombola

Questo script consente di generare cartelle per la tombola. 
Esse vengono generate sotto forma di serie.
Ogni serie è costituita da 6 cartelle che in totale possiedono tutti i numeri del gioco,
ciò vuol dire che un numero si presenta ogni sei cartelle.

Le serie partono da 1-6, 7-12 e così via...

## Installazione

Per il corretto funzionamento dello script è necessario installare nodejs.

## Utilizzo

É possibile indicare nel comando il numero di cartelle che si vuole 
generare, se omesso vengono generate 6 cartelle.


P.S. il numero di cartelle deve essere necessariamente un multiplo di 6.
```bash
node main.js <Numero di Cartelle>
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)