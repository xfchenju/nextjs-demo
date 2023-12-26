interface ParamsType {
  category: string;
  id: string
}

export default function BlogDetail({ params }: { params: ParamsType}) {
  return (<div>
    BlogDetail Page <br />
    category: {params.category}<br />
    id: {params.id}
  </div>)
}