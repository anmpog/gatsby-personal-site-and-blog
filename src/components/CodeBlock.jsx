/** @jsx jsx */
import { jsx } from 'theme-ui'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'

const CodeBlock = (props) => {
  const className = props.children.props.className || ''
  const matches = className.match(/language-(?<lang>.*)/)
  return (
    <Highlight {...defaultProps} code={props.children.props.children.trim()} language={
      matches && matches.groups && matches.groups.lang
        ? matches.groups.lang
        : ''
    }
      theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }} sx={{ padding: 2, borderRadius: ['0.375rem'], lineHeight: 1.4, overflowX: 'auto' }}>
          <code>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock