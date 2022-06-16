interface IntlMessage { 
  key:string, 
  value:string 
}

type Locale = 'en' | 'sv' | 'no'

interface Array<T> {
  filter<U extends T>(pred: (a: T) => a is U): U[];
}