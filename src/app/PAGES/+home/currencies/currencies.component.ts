import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-currencies",
  host: { class: "w-100" },
  templateUrl: "./currencies.component.html",
  styleUrls: ["./currencies.component.css"]
})
export class CurrenciesComponent {
  // This is currency list
  currencyList: object[] = [
    {
      currencyName: "Etherium",
      logo: "../../../../assets/currencies/etherium.png",
      value: "3.245000 ETH"
    },
    {
      currencyName: "Dollar",
      logo: "../../../../assets/currencies/dollar.png",
      value: "58634.000 USD"
    },
    {
      currencyName: "Bitcoin",
      logo: "../../../../assets/currencies/bitcoin.png",
      value: "4.160651 BTC"
    },
    {
      currencyName: "Total(USD)",
      logo: "../../../../assets/currencies/total_dollar.png",
      value: "111969.062 USD"
    },
    {
      currencyName: "Token Sale",
      logo: "../../../../assets/currencies/token_sale.png",
      value: "346636.775"
    },
    {
      currencyName: "Token Sale",
      logo: "../../../../assets/currencies/token_sale.png",
      value: "346636.775"
    }
  ];
  constructor() {}
}
