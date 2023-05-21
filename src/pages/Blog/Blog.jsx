export default function Blog() {
  return (
    <div className="container mx-auto">
      <h2 className="text-center my-10 text-4xl font-medium">Blogs</h2>
      <div>
        <div>
          <h3 className="text-2xl font-medium mb-2 mt-4">
            1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h3>
          <p>
            An access token is a credential that is used to authorize and
            authenticate a client when making requests to access protected
            resources on a server. It is typically issued by an authentication
            server or an identity provider (such as OAuth or OpenID Connect)
            after the client successfully authenticates. The access token
            contains information such as the client's identity and permissions.
            A refresh token, on the other hand, is a long-lived credential that
            is used to obtain a new access token when the current one expires.
            It is also issued by the authentication server and is typically
            associated with a shorter-lived access token. The refresh token
            allows the client to request a new access token without requiring
            the user to re-authenticate. When it comes to storing access tokens
            and refresh tokens on the client-side, security is crucial. Storing
            tokens in a secure manner helps prevent unauthorized access and
            token theft. Here are some recommended practices:
            <br />
            1.Access tokens:Store access tokens securely, such as in memory,
            local storage, or a secure cookie, depending on the client's
            environment and requirements. Use secure storage mechanisms that are
            resistant to cross-site scripting (XSS) attacks. Consider using
            short-lived access tokens and frequently refreshing them to minimize
            potential exposure.
            <br />
            2. Refresh tokens: Store refresh tokens securely, preferably in an
            HTTP-only secure cookie or a secure storage mechanism with strong
            encryption. Protect refresh tokens from cross-site scripting (XSS)
            attacks and other vulnerabilities. Consider using additional
            security measures like token rotation or single-use refresh tokens
            to mitigate the risk of token leakage or abuse.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-medium mb-2 mt-4">
            2.Compare SQL and NoSQL databases?
          </h3>
          <p>
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores. SQL
            databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-medium mb-2 mt-4">
            3.What is express js?
          </h3>
          <p>
            Express.js is a popular web application framework for Node.js, a
            JavaScript runtime environment. It provides a minimalist and
            flexible set of tools and features for building web applications and
            APIs. Express.js simplifies the process of creating server-side
            applications by offering a robust set of HTTP utility methods,
            middleware, and routing capabilities.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-medium mb-2 mt-4">
            4. What is next js?
          </h3>
          <p>
            NestJS is a progressive, extensible, and TypeScript-based framework
            for building scalable and efficient server-side applications. It is
            built on top of Node.js and leverages concepts from popular
            frameworks such as Angular, Express.js, and TypeScript to provide a
            robust and structured development experience.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-medium mb-2 mt-4">
            5.What is MongoDB aggregate and how does it work?
          </h3>
          <p>
            In MongoDB, the aggregate method is a powerful feature that allows
            you to perform advanced data processing and aggregation operations
            on collections. It provides a flexible and efficient way to analyze,
            transform, and summarize data based on various criteria. The
            aggregate method works by defining a pipeline of stages that are
            executed in sequence. Each stage performs a specific operation on
            the data and passes the result to the next stage in the pipeline.
            The stages can include a variety of operators and functions to shape
            and manipulate the data.
          </p>
        </div>
      </div>
    </div>
  );
}
