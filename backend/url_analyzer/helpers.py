from transformers import AutoTokenizer


def trim_string_to_tokens(input_string, max_tokens):
    tokenizer = AutoTokenizer.from_pretrained("gpt2")
    tokens = tokenizer.encode(input_string, add_special_tokens=False)

    if len(tokens) > max_tokens:
        trimmed_tokens = tokens[:max_tokens]
        trimmed_string = tokenizer.decode(
            trimmed_tokens, skip_special_tokens=True)
        return trimmed_string

    return input_string
