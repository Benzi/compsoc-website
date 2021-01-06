import { FluidObject } from "gatsby-image";

interface GraphqlType {
  allMarkdownRemark: MarkdownRemark
  markdownRemark: MarkdownRemarkNode
}

interface File {
  absolutePath: string
  extension: string
  sourceInstanceName: string
  relativePath: string
  relativeDirectory: string
  childImageSharp: Sharp
}

interface Sharp {
  fluid: FluidObject
}

interface MarkdownRemark {
  edges: MarkdownRemarkEdge[]
}

interface MarkdownRemarkEdge {
  node: MarkdownRemarkNode
}

interface MarkdownRemarkNode {
  fields: MarkdownRemarkFields
  frontmatter: MarkdownRemarkFrontmatter
  html: string
  rawMarkdownBody: string
  timeToRead: number
}

interface MarkdownRemarkFrontmatter {
  is_public: boolean
  name: string
  render: boolean
  short_description: string
  start: string
  title: string
  background: File
}

interface MarkdownRemarkFields {
  template: string
  slug: string
}

export type {
  GraphqlType,
  MarkdownRemark,
  MarkdownRemarkEdge,
  MarkdownRemarkFrontmatter,
  MarkdownRemarkNode,
}
