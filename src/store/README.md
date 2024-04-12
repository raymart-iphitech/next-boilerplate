# Store
The `store` directory contains all the zustand store that you will create throught the app's development.

An example is the `sample` directory inside here, if you want to create another store, just simply create a folder named to the store that you want to create. For example you want to create an `article` store, for this you need to create a folder named `article` inside the `store` directory and inside the `article` folder, create a `article.ts` file. 

A sample content of that `article.ts` file is shown below:

```
import { create } from "zustand"
import { createSelectors } from "../store"

export type ArticleState = {
  information: {
    title: string
    description: string
  },
  authorName: string
}

export const useArticleStoreBase = create<ArticleState>(() => ({
  information: {
    title: "",
    description: ""
  },
  authorName: ""
})) 

export const updateArticleInformation = ( newInformation: ArticleState["information"]) => useArticleStoreBase.setState({
  information: newInformation
}) 

export const useArticleStore = createSelectors(useArticleStoreBase)
```

As per [zustand documentation](https://docs.pmnd.rs/zustand/guides/practice-with-no-store-actions) it is recommended to have the aactions and the state information inside the store but having the actions separated from the value gives some advantages. For this codebase, this is suggested but can be not followed.