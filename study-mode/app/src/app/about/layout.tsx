export default function AboutLayout(props: LayoutProps<"/about">) {
  return (
    <div className="flex flex-col flex-1">
      <p className="bg-amber-50 px-16 py-2 text-xs text-amber-800 dark:bg-amber-950 dark:text-amber-200">
        This banner only exists inside about/layout.tsx — it wraps every
        page under /about, on top of the global NavBar from the root layout.
      </p>
      {props.children}
    </div>
  );
}
