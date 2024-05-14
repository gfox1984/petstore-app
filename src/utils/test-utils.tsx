import React, { ReactElement } from "react";
import { render, renderHook, RenderOptions } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

const customRenderHook = <Result, Props>(
  render: (initialProps: Props) => Result,
  options?: Omit<RenderOptions, "wrapper">
) => renderHook(render, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
export { customRenderHook as renderHook };
