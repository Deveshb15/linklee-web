import Column from "./Column";
import Divider from "./Divider";
import Row from "./Row";

export default function Footer() {

    return (
        <div
            className="
                fixed
                bottom-0
                left-0
                right-0
                z-50
                bg-bg
                shadow-md
                border-t border-bg
                text-black
            "
        >
            <Column>
                <Row></Row>
                <div className="flex w-full flex-row items-center justify-center bg-bg px-4 py-3">
                    <div
                        className="text-sm font-normal text-black opacity-80"
                    >
                        built by <a
                            href="https://pratsingh.notion.site/good-people-837f958075cf48b78e45bb311bf0b815"
                            target="_blank"
                            rel="noreferrer"
                            className="underline">
                            good people
                        </a>.
                    </div>
                </div>
                <Divider />
            </Column>
        </div>
    );
}
