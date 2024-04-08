import { create } from "zustand";


export type SampleState = {
  information: {
    title: string
    description: string
  }
}

type ArticleActions = {
  updateInformation: ( information: Partial<SampleState["information"]> ) => void
}

export const useSampleStore = create<SampleState & ArticleActions>(set =>({
  information: {
    title: "No more AI",
    description: "Description"
  },
  updateInformation: (newArticle: Partial<SampleState["information"]>) => set(state => ({
    information: {
      ...state.information,
      ...newArticle
    }
  }))
}))